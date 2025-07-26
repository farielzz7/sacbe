"use client"

import type React from "react"
import { useState, useEffect } from "react"
import {
  Menu,
  X,
  Clock,
  Calendar,
  Star,
  Leaf,
  Sun,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Play,
  Pause,
  Volume2,
  ChevronLeft,
  ChevronRight,
  Award,
  Heart,
  Utensils,
  TreePine,
} from "lucide-react"

export default function SacBePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    email: "",
    fecha: "",
    hora: "",
    personas: "",
    evento: "",
    comentarios: "",
  })

  // Smooth scroll animation
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in")
        }
      })
    }, observerOptions)

    const sections = document.querySelectorAll(".fade-section")
    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  // Auto-rotate gallery images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (
      !formData.nombre ||
      !formData.telefono ||
      !formData.email ||
      !formData.fecha ||
      !formData.hora ||
      !formData.personas
    ) {
      alert("Por favor, completa todos los campos obligatorios.")
      return
    }

    // Crear mensaje formateado para WhatsApp
    const mensaje = `🍃 *¡Jach ki'imak in wóol! (¡Muy contento!)* 🍃

*NUEVA RESERVA SAC-BÉ - LA RUTA DE LOS SABORES*

📋 *DETALLES DE LA RESERVA:*
• *Nombre:* ${formData.nombre}
• *Teléfono:* ${formData.telefono}
• *Email:* ${formData.email}
• *Fecha:* ${formData.fecha}
• *Hora:* ${formData.hora}
• *Personas:* ${formData.personas}
• *Evento:* ${formData.evento || "Experiencia regular"}
• *Comentarios:* ${formData.comentarios || "Ninguno"}

🌮 *EXPERIENCIA INCLUYE:*
• Degustación de platillos tradicionales
• Historia y origen de cada receta
• Evento cultural (según disponibilidad)
• Ingredientes 100% locales y orgánicos
• Ambiente auténtico yucateco

📞 *CONTACTO SAC-BÉ:*
• WhatsApp: +52 999 123 4567
• Email: hola@sacbe-yucatan.com
• Ubicación: Mérida, Yucatán

¡Gracias por elegir la auténtica experiencia maya! 🏺`

    // Codificar el mensaje para la URL de WhatsApp
    const mensajeCodificado = encodeURIComponent(mensaje)
    
    // Número de WhatsApp (reemplaza con tu número real)
    const numeroWhatsApp = "528130422601" // Formato internacional sin espacios ni +
    
    // Crear enlace de WhatsApp
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensajeCodificado}`
    
    // Abrir WhatsApp en nueva pestaña
    window.open(urlWhatsApp, '_blank')

    // Mostrar confirmación
    alert(
      `¡Jach ki'imak in wóol! (¡Muy contento!) 
    
Tu reserva ha sido procesada y se abrirá WhatsApp automáticamente con todos los detalles.

Si WhatsApp no se abre automáticamente, puedes contactarnos directamente:
• WhatsApp: +52 999 123 4567
• Email: hola@sacbe-yucatan.com

¡Te contactaremos para confirmar todos los detalles!`
    )

    setFormData({
      nombre: "",
      telefono: "",
      email: "",
      fecha: "",
      hora: "",
      personas: "",
      evento: "",
      comentarios: "",
    })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const platillos = [
    {
      nombre: "Salbutes",
      nombreMaya: "Salbut",
      origen: "Mérida - T'Ho'",
      descripcion:
        "Tortillas fritas cubiertas de lechuga, tomate, cebolla morada, aguacate y pollo deshebrado. Preparadas con recado rojo tradicional y servidas con salsa de chile habanero de Yaxkukul.",
      ingredientes: ["Masa de maíz criollo", "Pollo de rancho", "Recado rojo", "Chile habanero", "Cebolla morada"],
      precio: "$85",
      icono: "🌮",
      historia:
        "Platillo originario de los mercados de Mérida, donde las vendedoras mayas crearon esta delicia para los trabajadores del henequén.",
      tiempo: "Tradición de más de 100 años",
    },
    {
      nombre: "Panuchos",
      nombreMaya: "Panuch",
      origen: "Valladolid - Saki'",
      descripcion:
        "Tortillas rellenas de frijol colado, fritas hasta quedar crujientes y coronadas con cochinita pibil, cebolla morada encurtida en naranja agria y chile habanero.",
      ingredientes: ["Frijol negro", "Cochinita pibil", "Achiote", "Naranja agria", "Hoja de plátano"],
      precio: "$90",
      icono: "🫓",
      historia:
        "Creados en Valladolid durante la época colonial, combinando técnicas mayas con ingredientes españoles.",
      tiempo: "Receta ancestral del siglo XVI",
    },
    {
      nombre: "Poc Chuc",
      nombreMaya: "Poc Chuk",
      origen: "Tizimín - Titsimin",
      descripcion:
        "Carne de cerdo marinada en naranja agria y asada al carbón, servida con chiltomate casero, cebolla asada y tortillas hechas a mano con masa de maíz criollo.",
      ingredientes: ["Cerdo de rancho", "Naranja agria", "Tomate", "Chile dulce", "Carbón de tzalam"],
      precio: "$120",
      icono: "🥩",
      historia:
        "Platillo de los ganaderos de Tizimín, cocinado tradicionalmente en fogones de leña bajo las estrellas.",
      tiempo: "Tradición ganadera yucateca",
    },
    {
      nombre: "Tamales Colados",
      nombreMaya: "Waaj",
      origen: "Izamal - Itzamná",
      descripcion:
        "Tamales de masa colada con pollo en recado rojo, envueltos en hoja de plátano y cocidos en vapor. Acompañados de salsa de tomate yucateca.",
      ingredientes: ["Masa colada", "Pollo criollo", "Recado rojo", "Hoja de plátano", "Manteca de cerdo"],
      precio: "$65",
      icono: "🫔",
      historia: "Preparados en Izamal, la ciudad amarilla, siguiendo recetas transmitidas por las abuelas mayas.",
      tiempo: "Ritual culinario maya milenario",
    },
    {
      nombre: "Empanadas de Chaya",
      nombreMaya: "Chay Waaj",
      origen: "Tekax - Tekax",
      descripcion:
        "Empanadas crujientes rellenas de chaya (espinaca maya) con queso de bola, acompañadas de salsa de tomate yucateca con chile dulce.",
      ingredientes: ["Chaya fresca", "Queso de bola", "Masa de trigo", "Tomate", "Chile dulce"],
      precio: "$55",
      icono: "🥟",
      historia: "La chaya, planta sagrada maya, se convierte en deliciosa empanada en los mercados de Tekax.",
      tiempo: "Ingrediente sagrado maya",
    },
    {
      nombre: "Molletes de Longaniza",
      nombreMaya: "Longanisa Waaj",
      origen: "Valladolid - Saki'",
      descripcion:
        "Pan francés tostado con longaniza artesanal de Valladolid, frijoles colados, queso de bola derretido y salsa de chile habanero.",
      ingredientes: [
        "Longaniza vallisoletana",
        "Frijol negro colado",
        "Queso de bola",
        "Pan francés",
        "Chile habanero",
      ],
      precio: "$75",
      icono: "🍞",
      historia: "Fusión perfecta entre la tradición española del pan y los sabores mayas de Valladolid.",
      tiempo: "Mestizaje culinario colonial",
    },
  ]

  const ingredientesLocales = [
    {
      nombre: "Achiote",
      nombreMaya: "K'uxub",
      descripcion: "Semilla sagrada maya usada para dar color y sabor",
      origen: "Selvas de Yucatán",
    },
    {
      nombre: "Chile Habanero",
      nombreMaya: "Ik",
      descripcion: "El chile más picante y aromático de la península",
      origen: "Yaxkukul y Tizimín",
    },
    {
      nombre: "Naranja Agria",
      nombreMaya: "Suuts'",
      descripcion: "Cítrico esencial en la cocina yucateca",
      origen: "Huertos familiares mayas",
    },
    {
      nombre: "Chaya",
      nombreMaya: "Chay",
      descripcion: "Espinaca maya, planta sagrada y nutritiva",
      origen: "Patios mayas tradicionales",
    },
  ]

  const eventos = [
    {
      nombre: "Noches de Leyendas Mayas",
      nombreMaya: "Tsikbalil Akab",
      descripcion:
        "Proyecciones de leyendas como La Xtabay, El Huay Chivo y Los Aluxes, narradas en maya con subtítulos",
      horario: "Martes a Jueves, 7:30 PM",
      duracion: "45 minutos",
    },
    {
      nombre: "Trova Yucateca en Vivo",
      nombreMaya: "K'aay Yucateco",
      descripcion: "Trovadores auténticos interpretando clásicos como 'Peregrina' y 'La Llorona'",
      horario: "Viernes y Sábados, 8:00 PM",
      duracion: "2 horas",
    },
    {
      nombre: "Taller de Cocina Maya",
      nombreMaya: "Kanik Maaya",
      descripcion: "Aprende a preparar recado rojo y tortillas a mano con nuestras cocineras tradicionales",
      horario: "Domingos, 10:00 AM",
      duracion: "3 horas",
    },
    {
      nombre: "Ceremonia del Cacao",
      nombreMaya: "Kakaw Okot",
      descripcion: "Ritual maya del cacao sagrado con chocolate tradicional y miel melipona",
      horario: "Primer sábado del mes, 6:00 PM",
      duracion: "1 hora",
    },
  ]

  const testimonios = [
    {
      nombre: "María Guadalupe Pech",
      origen: "Maní, Yucatán",
      testimonio: "Jach ki'imak! Los salbutes saben exactamente como los hacía mi abuela. Es como viajar a mi pueblo.",
      calificacion: 5,
    },
    {
      nombre: "Carlos Hernández",
      origen: "Mérida, Yucatán",
      testimonio:
        "La experiencia cultural es increíble. Mis hijos aprendieron sobre nuestras tradiciones mientras comían.",
      calificacion: 5,
    },
    {
      nombre: "Ana Sofía Cocom",
      origen: "Oxkutzcab, Yucatán",
      testimonio: "Bix a beel! El poc chuc está perfecto, y escuchar trova mientras comes es mágico.",
      calificacion: 5,
    },
  ]

  const galleryImages = [
    { url: "/placeholder.svg?height=400&width=600&text=Salbutes+Tradicionales", alt: "Salbutes recién preparados" },
    { url: "/placeholder.svg?height=400&width=600&text=Cochinita+Pibil", alt: "Cochinita pibil en hoja de plátano" },
    { url: "/placeholder.svg?height=400&width=600&text=Food+Truck+Sac-Bé", alt: "Food truck Sac-Bé" },
    { url: "/placeholder.svg?height=400&width=600&text=Trova+Yucateca", alt: "Trovadores en vivo" },
    { url: "/placeholder.svg?height=400&width=600&text=Mercado+Maya", alt: "Ingredientes del mercado" },
    { url: "/placeholder.svg?height=400&width=600&text=Cenote+Yucatán", alt: "Cenote sagrado maya" },
  ]

  // Maya pattern SVG component
  const MayaPattern = ({ className = "" }) => (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="maya-pattern" x="0" y="0" width="25" height="25" patternUnits="userSpaceOnUse">
          <path d="M12.5 2L23 12.5L12.5 23L2 12.5Z" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.3" />
          <circle cx="12.5" cy="12.5" r="1.5" fill="currentColor" opacity="0.4" />
          <path d="M6 6L19 6M6 19L19 19M6 6L6 19M19 6L19 19" stroke="currentColor" strokeWidth="0.3" opacity="0.2" />
        </pattern>
      </defs>
      <rect width="100" height="100" fill="url(#maya-pattern)" />
    </svg>
  )

  // Glyph decorations
  const MayaGlyph = ({ type = "sun", className = "" }) => {
    const glyphs = {
      sun: "☀️",
      moon: "🌙",
      jaguar: "🐆",
      serpent: "🐍",
      corn: "🌽",
      cacao: "🍫",
    }

    return <div className={`text-4xl ${className}`}>{glyphs[type as keyof typeof glyphs]}</div>
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-amber-50 to-emerald-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gradient-to-r from-stone-800 via-emerald-900 to-stone-800 text-white z-50 shadow-2xl backdrop-blur-sm border-b-4 border-gradient-to-r from-amber-600 via-emerald-600 to-amber-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            {/* Logo con elementos mayas */}
            <div className="flex-shrink-0 flex items-center space-x-6">
              {/* Pirámide Maya */}
              <div className="relative">
                <svg width="40" height="40" viewBox="0 0 40 40" className="text-amber-400">
                  <path d="M20 4 L32 20 L20 16 L8 20 Z" fill="currentColor" opacity="0.8" />
                  <path d="M8 20 L32 20 L28 28 L12 28 Z" fill="currentColor" opacity="0.6" />
                  <path d="M12 28 L28 28 L24 36 L16 36 Z" fill="currentColor" opacity="0.4" />
                  <circle cx="20" cy="12" r="2" fill="#fbbf24" />
                </svg>
              </div>

              {/* Logo principal */}
              <div className="relative">
                <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-stone-200 via-amber-300 to-stone-200 tracking-wider font-serif">
                  SAC-BÉ
                </h1>
                <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent rounded-full"></div>
                <div className="text-xs text-stone-300 font-light tracking-widest mt-1 text-center">
                  LA RUTA DE LOS SABORES
                </div>
              </div>
            </div>

            {/* Desktop Menu con decoraciones mayas */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-1">
                {[
                  { name: "Inicio", id: "inicio" },
                  { name: "Historia", id: "historia" },
                  { name: "Menú", id: "menu" },
                  { name: "Ingredientes", id: "ingredientes" },
                  { name: "Eventos", id: "eventos" },
                  { name: "Galería", id: "galeria" },
                  { name: "Reservas", id: "reservas" },
                ].map((item, index) => (
                  <div key={item.name} className="relative group">
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className="relative px-4 py-3 text-stone-200 hover:text-amber-300 transition-all duration-300 font-medium tracking-wide flex flex-col items-center space-y-1"
                    >
                      <span className="text-sm font-semibold tracking-wider">{item.name}</span>

                      {/* Decoración maya inferior */}
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent group-hover:w-full transition-all duration-300"></div>

                      {/* Patrón maya de fondo */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300">
                        <svg width="100%" height="100%" viewBox="0 0 40 40">
                          <pattern id={`maya-${index}`} x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
                            <path d="M4 1L7 4L4 7L1 4Z" stroke="#fbbf24" strokeWidth="0.5" fill="none" />
                          </pattern>
                          <rect width="100%" height="100%" fill={`url(#maya-${index})`} />
                        </svg>
                      </div>
                    </button>

                    {/* Separador con glifo maya */}
                    {index < 6 && <div className="text-stone-600 text-xs px-1">◆</div>}
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile menu button con diseño maya */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="relative text-stone-200 hover:text-amber-300 transition-colors duration-200 p-3 rounded-lg border border-stone-600 hover:border-amber-400"
              >
                <div className="relative">
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                  {/* Decoración de esquinas mayas */}
                  <div className="absolute -top-1 -left-1 w-2 h-2 border-l border-t border-amber-400 opacity-60"></div>
                  <div className="absolute -top-1 -right-1 w-2 h-2 border-r border-t border-amber-400 opacity-60"></div>
                  <div className="absolute -bottom-1 -left-1 w-2 h-2 border-l border-b border-amber-400 opacity-60"></div>
                  <div className="absolute -bottom-1 -right-1 w-2 h-2 border-r border-b border-amber-400 opacity-60"></div>
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Menu mejorado */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-stone-600 bg-gradient-to-b from-stone-800 to-emerald-900">
              <div className="px-4 pt-4 pb-6 space-y-2">
                {[
                  { name: "Inicio", id: "inicio", desc: "Página principal" },
                  { name: "Historia", id: "historia", desc: "Nuestra historia maya" },
                  { name: "Menú", id: "menu", desc: "Platillos tradicionales" },
                  { name: "Ingredientes", id: "ingredientes", desc: "Ingredientes sagrados" },
                  { name: "Eventos", id: "eventos", desc: "Eventos culturales" },
                  { name: "Galería", id: "galeria", desc: "Fotos y testimonios" },
                  { name: "Reservas", id: "reservas", desc: "Reserva tu mesa" },
                ].map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.id)}
                    className="group w-full text-left px-4 py-4 text-stone-200 hover:text-amber-300 hover:bg-stone-700/50 transition-all duration-200 rounded-xl border border-transparent hover:border-stone-600 flex items-center space-x-4"
                  >
                    <div className="w-2 h-2 bg-amber-400 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                    <div className="flex-1">
                      <div className="font-medium text-lg tracking-wide">{item.name}</div>
                      <div className="text-stone-400 text-sm">{item.desc}</div>
                    </div>
                    <div className="text-stone-600 group-hover:text-amber-400 transition-colors duration-300">▶</div>
                  </button>
                ))}
              </div>

              {/* Decoración inferior del menú móvil */}
              <div className="border-t border-stone-600 px-4 py-3 bg-stone-900/50">
                <div className="flex justify-center space-x-4 text-stone-500">
                  <div className="w-8 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent rounded-full"></div>
                  <div className="text-amber-400">◆</div>
                  <div className="w-8 h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent rounded-full"></div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Borde decorativo inferior con patrón maya */}
        <div className="h-1 bg-gradient-to-r from-stone-700 via-amber-600 to-stone-700 relative overflow-hidden">
          <div className="absolute inset-0 opacity-50">
            <svg width="100%" height="100%" viewBox="0 0 100 4">
              <pattern id="maya-border" x="0" y="0" width="20" height="4" patternUnits="userSpaceOnUse">
                <path d="M2 2L6 1L10 2L14 1L18 2" stroke="#fbbf24" strokeWidth="0.5" fill="none" opacity="0.8" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#maya-border)" />
            </svg>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background with overlay */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
            style={{
              backgroundImage: `url('/placeholder.svg?height=1080&width=1920&text=Cenote+Sagrado+Maya')`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/80 via-teal-800/70 to-amber-900/80" />
          <MayaPattern className="absolute inset-0 w-full h-full text-amber-300 opacity-15" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
          <div className="mb-8 flex justify-center space-x-8">
            <MayaGlyph type="jaguar" className="animate-pulse" />
            <div className="inline-block p-6 rounded-full bg-gradient-to-br from-amber-400/30 to-yellow-300/30 backdrop-blur-sm border border-amber-300/50">
              <Sun className="w-16 h-16 text-amber-300 animate-spin-slow" />
            </div>
            <MayaGlyph type="serpent" className="animate-pulse" />
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 leading-tight font-serif">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400 tracking-wider drop-shadow-2xl">
              SAC-BÉ
            </span>
            <span className="block text-2xl md:text-4xl lg:text-5xl text-amber-100 font-light tracking-widest mt-6">
              LA RUTA DE LOS SABORES
            </span>
            <span className="block text-lg md:text-2xl text-amber-200/80 font-light tracking-wider mt-4 italic">
              "U beel u hanalo'ob Yucatán" - El camino de los sabores de Yucatán
            </span>
          </h1>

          <div className="max-w-5xl mx-auto mb-12">
            <p className="text-2xl md:text-3xl lg:text-4xl text-amber-100 leading-relaxed font-light mb-6">
              Sabores Ancestrales • Tradiciones Vivas • Cultura Maya
            </p>
            <p className="text-lg md:text-xl text-amber-200/90 leading-relaxed">
              Ingredientes sagrados de la península • Recetas de nuestras abuelas • Música y leyendas en cada bocado
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
              onClick={() => scrollToSection("reservas")}
              className="group relative px-12 py-5 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-white font-bold text-xl rounded-full transition-all duration-300 shadow-2xl hover:shadow-amber-500/30 transform hover:scale-105"
            >
              <span className="relative z-10">Reservar Experiencia Maya</span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 to-amber-300 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
            </button>

            <button
              onClick={() => scrollToSection("menu")}
              className="px-12 py-5 border-2 border-amber-300 text-amber-200 hover:bg-amber-300 hover:text-emerald-900 font-bold text-xl rounded-full transition-all duration-300 backdrop-blur-sm"
            >
              Explorar Sabores
            </button>
          </div>

          {/* Music Player */}
          <div className="mt-12 flex justify-center">
            <div className="bg-black/30 backdrop-blur-sm rounded-full px-6 py-3 flex items-center space-x-4">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="text-amber-300 hover:text-amber-200 transition-colors"
              >
                {isPlaying ? <Pause size={20} /> : <Play size={20} />}
              </button>
              <Volume2 className="text-amber-300" size={16} />
              <span className="text-amber-200 text-sm">Trova Yucateca Tradicional</span>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-amber-300 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-amber-300 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Historia Maya Section */}
      <section
        id="historia"
        className="py-24 bg-gradient-to-br from-stone-50 to-amber-50 relative fade-section opacity-0"
      >
        <MayaPattern className="absolute inset-0 w-full h-full text-emerald-800 opacity-5" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="mb-16">
            <div className="flex justify-center space-x-6 mb-8">
              <MayaGlyph type="corn" />
              <div className="inline-block p-4 rounded-full bg-gradient-to-br from-emerald-100 to-teal-100">
                <TreePine className="w-12 h-12 text-emerald-700" />
              </div>
              <MayaGlyph type="cacao" />
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-800 to-teal-700 mb-6 tracking-wide font-serif">
              U TSIKBAL SAC-BÉ
            </h2>
            <p className="text-2xl text-emerald-600 mb-4 italic">Nuestra Historia Sagrada</p>
            <div className="w-32 h-1 bg-gradient-to-r from-amber-400 to-yellow-300 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-amber-200/50">
              <h3 className="text-3xl font-bold text-emerald-800 mb-6 font-serif">El Camino Sagrado</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                <span className="text-2xl text-emerald-700 font-bold">Sac-Bé</span> significa "camino blanco" en maya
                yucateco. Eran las carreteras sagradas que conectaban las ciudades mayas, construidas con piedra caliza
                blanca que brillaba bajo la luna llena, guiando a los viajeros en la oscuridad.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Nuestro food truck sigue esa tradición ancestral: somos el camino que conecta los sabores auténticos de
                cada municipio yucateco con tu paladar, llevando las recetas que nuestras abuelas mayas han preservado
                durante siglos.
              </p>
              <div className="bg-emerald-50 rounded-2xl p-6 border-l-4 border-emerald-500">
                <p className="text-emerald-800 font-medium italic">
                  "Cada platillo es un viaje por el Sac-Bé culinario de Yucatán, donde cada bocado cuenta una historia
                  milenaria."
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-gradient-to-r from-amber-100 to-yellow-100 rounded-2xl p-8 border border-amber-200">
                <h4 className="text-xl font-bold text-amber-800 mb-4 flex items-center">
                  <Award className="mr-3 text-amber-600" size={24} />
                  Nuestra Misión
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  Preservar y compartir la auténtica gastronomía maya yucateca, apoyando a las comunidades locales y
                  manteniendo vivas las tradiciones culinarias ancestrales.
                </p>
              </div>

              <div className="bg-gradient-to-r from-emerald-100 to-teal-100 rounded-2xl p-8 border border-emerald-200">
                <h4 className="text-xl font-bold text-emerald-800 mb-4 flex items-center">
                  <Heart className="mr-3 text-emerald-600" size={24} />
                  Nuestros Valores
                </h4>
                <ul className="text-gray-700 space-y-2">
                  <li>• Respeto por las tradiciones mayas</li>
                  <li>• Ingredientes 100% locales y orgánicos</li>
                  <li>• Apoyo a productores yucatecos</li>
                  <li>• Preservación cultural activa</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-teal-100 to-emerald-100 rounded-2xl p-8 border border-teal-200">
                <h4 className="text-xl font-bold text-teal-800 mb-4 flex items-center">
                  <Utensils className="mr-3 text-teal-600" size={24} />
                  Nuestro Compromiso
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  Cada peso que inviertes en Sac-Bé regresa directamente a las familias mayas que cultivan nuestros
                  ingredientes y preservan estas recetas sagradas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menú Section */}
      <section id="menu" className="py-24 bg-gradient-to-br from-emerald-50 to-teal-50 relative fade-section opacity-0">
        <MayaPattern className="absolute inset-0 w-full h-full text-amber-600 opacity-5" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-800 to-teal-700 mb-6 tracking-wide font-serif">
              U JANAL MAAYA
            </h2>
            <p className="text-2xl text-emerald-600 mb-4 italic">Nuestro Menú Sagrado</p>
            <div className="w-32 h-1 bg-gradient-to-r from-amber-400 to-yellow-300 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Cada platillo cuenta la historia de un municipio yucateco, preparado con ingredientes sagrados y técnicas
              ancestrales transmitidas por nuestras abuelas mayas
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {platillos.map((platillo, index) => (
              <div
                key={index}
                className="group relative bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden border border-amber-200/50 hover:border-amber-300/70 transform hover:-translate-y-2"
              >
                {/* Card Header */}
                <div className="relative h-32 bg-gradient-to-br from-amber-400 via-amber-500 to-yellow-500 flex items-center justify-between px-8">
                  <div className="flex items-center space-x-4">
                    <div className="text-5xl group-hover:scale-110 transition-transform duration-300">
                      {platillo.icono}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white font-serif">{platillo.nombre}</h3>
                      <p className="text-amber-100 text-sm italic">{platillo.nombreMaya}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 mb-2">
                      <span className="text-emerald-700 font-bold text-lg">{platillo.precio}</span>
                    </div>
                    <div className="text-white text-xs">{platillo.tiempo}</div>
                  </div>
                  <MayaPattern className="absolute inset-0 w-full h-full text-white opacity-10" />
                </div>

                {/* Card Content */}
                <div className="p-8">
                  <div className="mb-6">
                    <div className="flex items-center mb-4">
                      <div className="w-4 h-4 bg-amber-500 rounded-full mr-2"></div>
                      <span className="text-amber-600 font-bold text-lg">{platillo.origen}</span>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-4">{platillo.descripcion}</p>
                    <div className="bg-emerald-50 rounded-2xl p-4 mb-4">
                      <p className="text-emerald-800 text-sm italic font-medium">{platillo.historia}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-bold text-emerald-700 mb-3 tracking-wide">INGREDIENTES SAGRADOS:</h4>
                    <div className="flex flex-wrap gap-2">
                      {platillo.ingredientes.map((ingrediente, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gradient-to-r from-amber-100 to-yellow-100 text-amber-800 text-xs rounded-full border border-amber-200"
                        >
                          {ingrediente}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="text-3xl font-bold text-emerald-700">{platillo.precio}</div>
                    <button className="px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-white font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                      Ordenar Ahora
                    </button>
                  </div>
                </div>

                {/* Decorative border */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => scrollToSection("reservas")}
              className="group relative px-12 py-5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xl rounded-full transition-all duration-300 shadow-2xl hover:shadow-emerald-500/25 transform hover:scale-105"
            >
              <span className="relative z-10">Reservar Mesa Maya</span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-400 to-emerald-300 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </section>

      {/* Ingredientes Locales Section */}
      <section
        id="ingredientes"
        className="py-24 bg-gradient-to-br from-stone-50 to-amber-50 relative fade-section opacity-0"
      >
        <MayaPattern className="absolute inset-0 w-full h-full text-emerald-800 opacity-5" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-800 to-teal-700 mb-6 tracking-wide font-serif">
              U K'AAXO'OB MAAYA
            </h2>
            <p className="text-2xl text-emerald-600 mb-4 italic">Ingredientes Sagrados de la Península</p>
            <div className="w-32 h-1 bg-gradient-to-r from-amber-400 to-yellow-300 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Cada ingrediente que utilizamos proviene directamente de productores mayas locales, preservando la pureza
              y autenticidad de los sabores ancestrales
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ingredientesLocales.map((ingrediente, index) => (
              <div
                key={index}
                className="group bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-amber-200/50 hover:border-emerald-300/70 transform hover:-translate-y-1"
              >
                <div className="flex items-start space-x-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Leaf className="w-10 h-10 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-emerald-800 mb-2 font-serif">{ingrediente.nombre}</h3>
                    <p className="text-amber-600 font-medium mb-3 italic">"{ingrediente.nombreMaya}"</p>
                    <p className="text-gray-700 leading-relaxed mb-4">{ingrediente.descripcion}</p>
                    <div className="flex items-center text-sm text-emerald-600">
                      <div className="w-3 h-3 bg-emerald-500 rounded-full mr-2"></div>
                      <span className="font-medium">{ingrediente.origen}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-3xl p-12 border border-emerald-200">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-emerald-800 mb-6 font-serif">Compromiso con la Comunidad</h3>
              <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto mb-8">
                Trabajamos directamente con más de 50 familias mayas productoras en toda la península de Yucatán. Cada
                compra que realizas apoya la economía local y ayuda a preservar las técnicas agrícolas tradicionales que
                han sido transmitidas durante generaciones.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-emerald-700 mb-2">50+</div>
                  <p className="text-emerald-600 font-medium">Familias Productoras</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-emerald-700 mb-2">100%</div>
                  <p className="text-emerald-600 font-medium">Ingredientes Locales</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-emerald-700 mb-2">15</div>
                  <p className="text-emerald-600 font-medium">Municipios Aliados</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eventos Section */}
      <section
        id="eventos"
        className="py-24 bg-gradient-to-br from-emerald-50 to-teal-50 relative fade-section opacity-0"
      >
        <MayaPattern className="absolute inset-0 w-full h-full text-amber-600 opacity-5" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-800 to-teal-700 mb-6 tracking-wide font-serif">
              U OKOTO'OB MAAYA
            </h2>
            <p className="text-2xl text-emerald-600 mb-4 italic">Eventos y Ceremonias Culturales</p>
            <div className="w-32 h-1 bg-gradient-to-r from-amber-400 to-yellow-300 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              En Sac-Bé, cada comida es una experiencia cultural completa. Sumérgete en las tradiciones milenarias
              mientras disfrutas de auténticos sabores ancestrales en un ambiente mágico y auténtico.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {eventos.map((evento, index) => (
              <div
                key={index}
                className="group bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 border border-amber-200/50 hover:border-amber-300/70 transform hover:-translate-y-2 overflow-hidden"
              >
                <div className="relative h-24 bg-gradient-to-r from-emerald-600 to-teal-600 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-white text-center font-serif px-4">{evento.nombre}</h3>
                  <MayaPattern className="absolute inset-0 w-full h-full text-white opacity-10" />
                </div>

                <div className="p-8">
                  <p className="text-amber-600 font-bold mb-2 italic text-lg">"{evento.nombreMaya}"</p>
                  <p className="text-gray-700 leading-relaxed mb-6">{evento.descripcion}</p>

                  <div className="space-y-3">
                    <div className="flex items-center text-emerald-700">
                      <Clock className="w-5 h-5 mr-3" />
                      <span className="font-medium">{evento.horario}</span>
                    </div>
                    <div className="flex items-center text-amber-600">
                      <Calendar className="w-5 h-5 mr-3" />
                      <span className="font-medium">Duración: {evento.duracion}</span>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <button className="w-full py-3 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                      Reservar para este Evento
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-amber-100 to-yellow-100 rounded-3xl p-12 border border-amber-200">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-amber-800 mb-6 font-serif">Calendario Lunar Maya</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-4xl mx-auto">
                Nuestros eventos especiales siguen el calendario sagrado maya de 260 días. Cada ceremonia está
                sincronizada con las fases lunares y los ciclos naturales, tal como lo hacían nuestros ancestros para
                honrar a los dioses y la naturaleza.
              </p>
              <button className="group relative px-12 py-4 bg-gradient-to-r from-amber-600 to-yellow-500 hover:from-amber-500 hover:to-yellow-400 text-white font-bold text-lg rounded-full transition-all duration-300 shadow-2xl hover:shadow-amber-500/25 transform hover:scale-105 inline-flex items-center">
                <Calendar className="mr-3 group-hover:rotate-12 transition-transform duration-300" size={24} />
                <span className="relative z-10">Ver Calendario Sagrado</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Galería Section */}
      <section
        id="galeria"
        className="py-24 bg-gradient-to-br from-stone-50 to-amber-50 relative fade-section opacity-0"
      >
        <MayaPattern className="absolute inset-0 w-full h-full text-emerald-800 opacity-5" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-800 to-teal-700 mb-6 tracking-wide font-serif">
              U WÍINKILAL SAC-BÉ
            </h2>
            <p className="text-2xl text-emerald-600 mb-4 italic">Galería de Experiencias</p>
            <div className="w-32 h-1 bg-gradient-to-r from-amber-400 to-yellow-300 mx-auto rounded-full mb-8"></div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              <div className="relative h-96 md:h-[500px]">
                <img
                  src={galleryImages[currentImageIndex].url || "/placeholder.svg"}
                  alt={galleryImages[currentImageIndex].alt}
                  className="w-full h-full object-cover transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{galleryImages[currentImageIndex].alt}</h3>
                  <p className="text-amber-200">Experiencia auténtica yucateca</p>
                </div>
              </div>
            </div>

            {/* Navigation buttons */}
            <button
              onClick={() => setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-white transition-all duration-200"
            >
              <ChevronLeft className="w-6 h-6 text-emerald-700" />
            </button>
            <button
              onClick={() => setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-white transition-all duration-200"
            >
              <ChevronRight className="w-6 h-6 text-emerald-700" />
            </button>

            {/* Dots indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentImageIndex ? "bg-emerald-600" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Testimonios */}
          <div className="mt-20">
            <h3 className="text-3xl font-bold text-center text-emerald-800 mb-12 font-serif">
              U Tsikbalilo'ob - Testimonios de Nuestros Invitados
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonios.map((testimonio, index) => (
                <div
                  key={index}
                  className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-amber-200/50"
                >
                  <div className="flex mb-4">
                    {[...Array(testimonio.calificacion)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic mb-6 leading-relaxed">"{testimonio.testimonio}"</p>
                  <div>
                    <p className="font-bold text-emerald-700">{testimonio.nombre}</p>
                    <p className="text-sm text-amber-600">{testimonio.origen}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reservas Section */}
      <section
        id="reservas"
        className="py-24 bg-gradient-to-br from-emerald-50 to-teal-50 relative fade-section opacity-0"
      >
        <MayaPattern className="absolute inset-0 w-full h-full text-amber-600 opacity-5" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-800 to-teal-700 mb-6 tracking-wide font-serif">
              RESERVA U EXPERIENCIA
            </h2>
            <p className="text-2xl text-emerald-600 mb-4 italic">Asegura tu Lugar en el Sac-Bé</p>
            <div className="w-32 h-1 bg-gradient-to-r from-amber-400 to-yellow-300 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-600 leading-relaxed">
              Reserva tu experiencia gastronómica y cultural maya. Cada mesa incluye degustación, evento cultural y la
              historia detrás de cada platillo.
            </p>
          </div>

          <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-12 border border-amber-200/50">
            <form onSubmit={handleFormSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-bold text-emerald-700 mb-3 tracking-wide">
                    U K'AABA' (NOMBRE COMPLETO) *
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleInputChange}
                    required
                    className="w-full px-6 py-4 border-2 border-amber-200 rounded-2xl focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-300 bg-white/80 backdrop-blur-sm"
                    placeholder="Tu nombre completo"
                  />
                </div>

                <div>
                  <label htmlFor="telefono" className="block text-sm font-bold text-emerald-700 mb-3 tracking-wide">
                    U TELÉFONO (TELÉFONO) *
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleInputChange}
                    required
                    className="w-full px-6 py-4 border-2 border-amber-200 rounded-2xl focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-300 bg-white/80 backdrop-blur-sm"
                    placeholder="+52 999 123 4567"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-emerald-700 mb-3 tracking-wide">
                    CORREO ELECTRÓNICO *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-6 py-4 border-2 border-amber-200 rounded-2xl focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-300 bg-white/80 backdrop-blur-sm"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="personas" className="block text-sm font-bold text-emerald-700 mb-3 tracking-wide">
                    JUNTÚUL MÁAK (PERSONAS) *
                  </label>
                  <input
                    type="number"
                    id="personas"
                    name="personas"
                    value={formData.personas}
                    onChange={handleInputChange}
                    min="1"
                    max="12"
                    required
                    className="w-full px-6 py-4 border-2 border-amber-200 rounded-2xl focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-300 bg-white/80 backdrop-blur-sm"
                    placeholder="¿Cuántas personas?"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="fecha" className="block text-sm font-bold text-emerald-700 mb-3 tracking-wide">
                    U K'IIN (FECHA) *
                  </label>
                  <input
                    type="date"
                    id="fecha"
                    name="fecha"
                    value={formData.fecha}
                    onChange={handleInputChange}
                    required
                    className="w-full px-6 py-4 border-2 border-amber-200 rounded-2xl focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-300 bg-white/80 backdrop-blur-sm"
                  />
                </div>

                <div>
                  <label htmlFor="hora" className="block text-sm font-bold text-emerald-700 mb-3 tracking-wide">
                    U ÓORA (HORA) *
                  </label>
                  <input
                    type="time"
                    id="hora"
                    name="hora"
                    value={formData.hora}
                    onChange={handleInputChange}
                    required
                    className="w-full px-6 py-4 border-2 border-amber-200 rounded-2xl focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-300 bg-white/80 backdrop-blur-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="evento" className="block text-sm font-bold text-emerald-700 mb-3 tracking-wide">
                  EVENTO ESPECIAL (OPCIONAL)
                </label>
                <select
                  id="evento"
                  name="evento"
                  value={formData.evento}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 border-2 border-amber-200 rounded-2xl focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-300 bg-white/80 backdrop-blur-sm"
                >
                  <option value="">Experiencia regular</option>
                  <option value="leyendas">Noche de Leyendas Mayas</option>
                  <option value="trova">Trova Yucateca en Vivo</option>
                  <option value="taller">Taller de Cocina Maya</option>
                  <option value="cacao">Ceremonia del Cacao</option>
                </select>
              </div>

              <div>
                <label htmlFor="comentarios" className="block text-sm font-bold text-emerald-700 mb-3 tracking-wide">
                  COMENTARIOS ADICIONALES (OPCIONAL)
                </label>
                <textarea
                  id="comentarios"
                  name="comentarios"
                  value={formData.comentarios}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-6 py-4 border-2 border-amber-200 rounded-2xl focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-300 bg-white/80 backdrop-blur-sm resize-none"
                  placeholder="Alergias, preferencias especiales, celebraciones..."
                />
              </div>

              <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-200">
                <h4 className="text-lg font-bold text-emerald-800 mb-3">Tu experiencia incluye:</h4>
                <ul className="text-emerald-700 space-y-2">
                  <li>• Degustación de platillos tradicionales</li>
                  <li>• Historia y origen de cada receta</li>
                  <li>• Evento cultural (según disponibilidad)</li>
                  <li>• Ingredientes 100% locales y orgánicos</li>
                  <li>• Ambiente auténtico yucateco</li>
                </ul>
              </div>

              <div className="text-center pt-8">
                <button
                  type="submit"
                  className="group relative px-16 py-6 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xl rounded-full transition-all duration-300 shadow-2xl hover:shadow-emerald-500/25 transform hover:scale-105"
                >
                  <span className="relative z-10">CONFIRMAR RESERVA MAYA</span>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-400 to-emerald-300 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </button>
                <p className="text-sm text-gray-600 mt-4">
                  Te contactaremos por WhatsApp y email en menos de 30 minutos
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-emerald-900 via-emerald-800 to-teal-800 text-white py-20 relative">
        <MayaPattern className="absolute inset-0 w-full h-full text-amber-300 opacity-10" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Logo y descripción */}
            <div className="text-center md:text-left">
              <div className="mb-6">
                <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-200 tracking-wider font-serif mb-2">
                  SAC-BÉ
                </h3>
                <p className="text-amber-200 text-sm tracking-widest">LA RUTA DE LOS SABORES</p>
              </div>
              <p className="text-amber-100 leading-relaxed">
                El auténtico sabor de Yucatán en cada bocado. Preservando tradiciones mayas desde 2024.
              </p>
            </div>

            {/* Contacto */}
            <div className="text-center">
              <h4 className="text-xl font-bold text-amber-300 mb-6 font-serif">CONTACTO</h4>
              <div className="space-y-4">
                <div className="flex items-center justify-center space-x-3">
                  <Phone className="w-5 h-5 text-amber-400" />
                  <span className="text-amber-100">+52 999 123 4567</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <Mail className="w-5 h-5 text-amber-400" />
                  <span className="text-amber-100">hola@sacbe-yucatan.com</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <div className="w-5 h-5 bg-amber-400 rounded-full"></div>
                  <span className="text-amber-100">Mérida, Yucatán</span>
                </div>
              </div>
            </div>

            {/* Redes Sociales */}
            <div className="text-center md:text-right">
              <h4 className="text-xl font-bold text-amber-300 mb-6 font-serif">SÍGUENOS</h4>
              <div className="flex justify-center md:justify-end space-x-6 mb-6">
                <a
                  href="#"
                  className="w-12 h-12 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-full flex items-center justify-center hover:from-amber-400 hover:to-yellow-400 transition-all duration-300 transform hover:scale-110"
                >
                  <Instagram className="w-6 h-6 text-white" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center hover:from-emerald-400 hover:to-teal-400 transition-all duration-300 transform hover:scale-110"
                >
                  <Facebook className="w-6 h-6 text-white" />
                </a>
              </div>
              <p className="text-amber-200 text-sm">@sacbe_yucatan</p>
            </div>
          </div>

          <div className="border-t border-emerald-700 pt-8">
            <div className="text-center">
              <div className="w-32 h-1 bg-gradient-to-r from-amber-400 to-yellow-300 mx-auto rounded-full mb-6"></div>
              <p className="text-lg mb-4 text-amber-100">
                © 2025 Sac-Bé: La Ruta de los Sabores. Todos los derechos reservados.
              </p>
              <p className="text-amber-200 text-sm italic">
                "Jach ki'imak tech - Gracias por preservar nuestras tradiciones"
              </p>
            </div>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap');
        
        .animate-fade-in {
          animation: fadeIn 1.2s ease-in-out forwards;
        }

        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(60px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        * {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }

        h1, h2, h3, .font-serif {
          font-family: 'Cinzel', Georgia, serif;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          background: linear-gradient(135deg, #fafaf9 0%, #fef3c7 50%, #ecfdf5 100%);
        }

        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: #f1f5f9;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #059669, #0d9488);
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #047857, #0f766e);
        }

        /* Maya-inspired decorative elements */
        .maya-border {
          border-image: linear-gradient(45deg, #f59e0b, #eab308, #f59e0b) 1;
        }

        /* Responsive text scaling */
        @media (max-width: 640px) {
          h1 {
            font-size: 2.5rem;
          }
          h2 {
            font-size: 2rem;
          }
        }
      `}</style>
    </div>
  )
}
