"use client"

import type React from "react"
import { useState, useEffect } from "react"
import {
  Menu,
  X,
  Clock,
  Calendar,
  Star,
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
  MapPin,
  Users,
  Leaf,
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
    const numeroWhatsApp = "529995096524" // Formato internacional sin espacios ni +

    // Crear enlace de WhatsApp
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensajeCodificado}`

    // Abrir WhatsApp en nueva pestaña
    window.open(urlWhatsApp, "_blank")

    // Mostrar confirmación
    alert(
      `¡Jach ki'imak in wóol! (¡Muy contento!)
      
Tu reserva ha sido procesada y se abrirá WhatsApp automáticamente con todos los detalles.

Si WhatsApp no se abre automáticamente, puedes contactarnos directamente:
• WhatsApp: +52 999 123 4567
• Email: hola@sacbe-yucatan.com

¡Te contactaremos para confirmar todos los detalles!`,
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
      origen: "Kanasín",
      descripcion:
        "Tortillas fritas cubiertas de lechuga, tomate, cebolla morada, aguacate y pollo deshebrado. Preparadas con recado rojo tradicional y servidas con salsa de chile habanero.",
      ingredientes: ["Masa de maíz criollo", "Pollo de rancho", "Recado rojo", "Chile habanero", "Cebolla morada"],
      precio: "$40",
      icono: "🌮",
      historia:
        "Platillo tradicional de Kanasín, donde las familias mayas perfeccionaron esta receta durante generaciones.",
      tiempo: "Tradición familiar centenaria",
    },
    {
      nombre: "Panuchos",
      nombreMaya: "Panuch",
      origen: "Kanasín",
      descripcion:
        "Tortillas rellenas de frijol colado, fritas hasta quedar crujientes y coronadas con cochinita pibil, cebolla morada encurtida en naranja agria y chile habanero.",
      ingredientes: ["Frijol negro", "Cochinita pibil", "Achiote", "Naranja agria", "Hoja de plátano"],
      precio: "$45",
      icono: "🫓",
      historia: "Especialidad de Kanasín que combina técnicas mayas ancestrales con sabores únicos de la región.",
      tiempo: "Receta ancestral maya",
    },
    {
      nombre: "Poc Chuc",
      nombreMaya: "Poc Chuk",
      origen: "Maní",
      descripcion:
        "Carne de cerdo marinada en naranja agria y asada al carbón, servida con chiltomate casero, cebolla asada y tortillas hechas a mano con masa de maíz criollo.",
      ingredientes: ["Cerdo de rancho", "Naranja agria", "Tomate", "Chile dulce", "Carbón de tzalam"],
      precio: "$100",
      icono: "🥩",
      historia: "Platillo tradicional de Maní, cocinado en fogones de leña bajo las estrellas yucatecas.",
      tiempo: "Tradición ganadera de Maní",
    },
    {
      nombre: "Molletes de Longaniza",
      nombreMaya: "Longanisa Waaj",
      origen: "Valladolid",
      descripcion:
        "Pan francés tostado con longaniza artesanal de Valladolid, frijoles colados, queso de bola derretido y salsa de chile habanero.",
      ingredientes: [
        "Longaniza vallisoletana",
        "Frijol negro colado",
        "Queso de bola",
        "Pan francés",
        "Chile habanero",
      ],
      precio: "$40",
      icono: "🍞",
      historia: "Especialidad de Valladolid que fusiona la tradición española del pan con sabores mayas auténticos.",
      tiempo: "Mestizaje culinario vallisoletano",
    },
    {
      nombre: "Empanadas de Chaya",
      nombreMaya: "Chay Waaj",
      origen: "Buctzotz",
      descripcion:
        "Empanadas crujientes rellenas de chaya (espinaca maya) con queso de bola, acompañadas de salsa de tomate yucateca con chile dulce.",
      ingredientes: ["Chaya fresca", "Queso de bola", "Masa de trigo", "Tomate", "Chile dulce"],
      precio: "$35",
      icono: "🥟",
      historia: "La chaya, planta sagrada maya de Buctzotz, se convierte en deliciosa empanada tradicional.",
      tiempo: "Ingrediente sagrado de Buctzotz",
    },
    {
      nombre: "Tamalitos",
      nombreMaya: "Waaj",
      origen: "Espita",
      descripcion:
        " Orden de 2 pequeños tamales de masa colada con pollo en recado rojo, envueltos en hoja de plátano y cocidos en vapor. Acompañados de salsa de tomate yucateca.",
      ingredientes: ["Masa colada", "Pollo criollo", "Recado rojo", "Hoja de plátano", "Manteca de cerdo"],
      precio: "$30",
      icono: "🫔",
      historia: "Preparados en Espita siguiendo recetas transmitidas por las abuelas mayas de la región.",
      tiempo: "Ritual culinario de Espita",
    },
  ]

  const combos = [
    {
      nombre: "Combo Valladolid/Buctzotz",
      descripcion: "2 molletes de longaniza, 1 empanada de chaya, jugo y postre a elegir",
      precio: "$110",
      municipios: ["Valladolid", "Buctzotz"],
      incluye: ["2 Molletes", "1 Empanada de chaya", "Jugo", "Postre"],
    },
    {
      nombre: "Combo Espita/Valladolid",
      descripcion: "1 tamalito, 1 mollete de longaniza, jugo y postre a elegir",
      precio: "$85",
      municipios: ["Espita", "Valladolid"],
      incluye: ["1 Tamalito", "1 Mollete", "Jugo", "Postre"],
    },
    {
      nombre: "Combo Maní/Buctzotz",
      descripcion: "½ orden de poc-chuc, 1 empanada de chaya, jugo o postre a elegir",
      precio: "$120",
      municipios: ["Maní", "Buctzotz"],
      incluye: ["½ Poc-chuc", "1 Empanada", "Jugo o Postre"],
    },
    {
      nombre: "Combo Kanasín",
      descripcion: "2 salbutes, 2 panuchos, jugo a elegir",
      precio: "$125",
      municipios: ["Kanasín"],
      incluye: ["2 Salbutes", "2 Panuchos", "Jugo"],
    },
  ]

  const postres = [
    { nombre: "Cremita de Coco", precio: "$10", descripcion: "Postre tradicional yucateco cremoso y refrescante" },
    { nombre: "Pan de Elote", precio: "$15", descripcion: "Pan dulce hecho con elote fresco de la región" },
    { nombre: "Barquillas", precio: "$5", descripcion: "Galletas crujientes tradicionales yucatecas" },
    { nombre: "Caballero Pobre", precio: "$15", descripcion: "Postre clásico con pan, almíbar y canela" },
  ]

  const bebidas = [
    { nombre: "Jugo de Naranja", precio: "$20", descripcion: "Naranja fresca de huertos yucatecos" },
    { nombre: "Limonada", precio: "$20", descripcion: "Refrescante limonada con limones locales" },
    { nombre: "Horchata", precio: "$20", descripcion: "Bebida tradicional de arroz con canela" },
    { nombre: "Jamaica", precio: "$10", descripcion: "Agua fresca de flor de jamaica" },
  ]

  const ubicaciones = [
    { nombre: "Parque de las Américas", horario: "Miércoles y Jueves", descripcion: "Ambiente familiar y relajado" },
    { nombre: "Parque la Plancha", horario: "Viernes y Sábado", descripcion: "Centro cultural de Mérida" },
    { nombre: "Paseo de Montejo", horario: "Domingo", descripcion: "Icónico boulevard meridano" },
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
      nombre: "Proyecciones Culturales Mayas",
      nombreMaya: "Tsikbalil Maaya",
      descripcion:
        "Videos sobre leyendas, historias y tradiciones de los municipios, narrados en maya con subtítulos en español e inglés",
      horario: "Todos los días de servicio",
      duracion: "Continuo durante el servicio",
    },
    {
      nombre: "Música Regional de Fondo",
      nombreMaya: "K'aay Yucateco",
      descripcion: "Trova yucateca y música tradicional cuando no hay proyecciones",
      horario: "Todos los días de servicio",
      duracion: "Ambiente continuo",
    },
    {
      nombre: "Experiencia Cultural Completa",
      nombreMaya: "Jeel Kanik Maaya",
      descripcion: "Combinación de gastronomía, cultura e historia en cada visita",
      horario: "6:00 PM - 11:00 PM",
      duracion: "Durante todo el servicio",
    },
  ]

  const testimonios = [
    {
      nombre: "María Guadalupe Pech",
      origen: "Maní, Yucatán",
      testimonio:
        "¡El poc-chuc sabe exactamente como lo hacía mi abuela! Es increíble poder disfrutar los sabores de mi pueblo aquí en Mérida.",
      calificacion: 5,
    },
    {
      nombre: "James Mitchell",
      origen: "Toronto, Canadá",
      testimonio:
        "Amazing cultural experience! The Maya videos with English subtitles helped me understand Yucatecan traditions while enjoying authentic food.",
      calificacion: 5,
    },
    {
      nombre: "Ana Sofía Cocom",
      origen: "Valladolid, Yucatán",
      testimonio:
        "Los molletes de longaniza están perfectos, y escuchar las leyendas en maya mientras comes es una experiencia única.",
      calificacion: 5,
    },
  ]

  const galleryImages = [
    {
      url: "/placeholder.svg?height=400&width=600&text=Food+Truck+Sac-Bé",
      alt: "Food truck Sac-Bé en Parque de las Américas",
    },
    {
      url: "/placeholder.svg?height=400&width=600&text=Salbutes+y+Panuchos",
      alt: "Salbutes y panuchos recién preparados",
    },
    {
      url: "/placeholder.svg?height=400&width=600&text=Proyección+Maya",
      alt: "Proyección cultural en maya con subtítulos",
    },
    {
      url: "/placeholder.svg?height=400&width=600&text=Molletes+Valladolid",
      alt: "Molletes de longaniza de Valladolid",
    },
    { url: "/placeholder.svg?height=400&width=600&text=Área+de+Mesas", alt: "Área de mesas con ambiente cultural" },
    {
      url: "/placeholder.svg?height=400&width=600&text=Productores+Locales",
      alt: "Colaboración con productores locales",
    },
  ]

  // Maya pattern SVG component inspired by the logo
  const MayaPattern = ({ className = "" }) => (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="maya-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M10 2L18 10L10 18L2 10Z" stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.4" />
          <path d="M10 6L14 10L10 14L6 10Z" stroke="currentColor" strokeWidth="0.6" fill="currentColor" opacity="0.2" />
          <circle cx="10" cy="10" r="1" fill="currentColor" opacity="0.6" />
          <path d="M4 4L16 4M4 16L16 16M4 4L4 16M16 4L16 16" stroke="currentColor" strokeWidth="0.3" opacity="0.3" />
        </pattern>
      </defs>
      <rect width="100" height="100" fill="url(#maya-pattern)" />
    </svg>
  )

  // Logo component
  const SacBeLogo = ({ size = "large", className = "" }) => (
    <div className={`flex items-center space-x-3 ${className}`}>
      <div className="relative">
        <img
          src="/logo.png"
          alt="Sac-Bé Logo"
          className={`${size === "large" ? "w-65 h-65" : "w-36 h-36"} object-contain`}
        />
      </div>
      <div className="relative">
        <h1
          className={`${size === "large" ? "text-4xl" : "text-3xl"} font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-400 to-orange-500 tracking-wider font-serif`}
        >
          SAC-BÉ
        </h1>
        <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-orange-400 to-transparent rounded-full"></div>
        <div
          className={`${size === "large" ? "text-xs" : "text-xs"} text-orange-600 font-light tracking-widest mt-1 text-center`}
        >
          LA RUTA DE LOS SABORES
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-100 via-orange-50 to-amber-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gradient-to-r from-stone-200 via-amber-100 to-stone-200 text-stone-800 z-50 shadow-2xl backdrop-blur-sm border-b-4 border-amber-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            {/* Logo */}
            <div className="flex-shrink-0">
              <SacBeLogo size="medium" />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-1">
                {[
                  { name: "Inicio", id: "inicio" },
                  { name: "Historia", id: "historia" },
                  { name: "Menú", id: "menu" },
                  { name: "Ingredientes", id: "ingredientes" },
                  { name: "Ubicaciones", id: "ubicaciones" },
                  { name: "Reservas", id: "reservas" },
                ].map((item, index) => (
                  <div key={item.name} className="relative group flex items-center">
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className="relative px-4 py-3 text-stone-700 hover:text-orange-700 transition-all duration-300 font-medium tracking-wide flex flex-col items-center space-y-1"
                    >
                      <span className="text-sm font-semibold tracking-wider">{item.name}</span>
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-transparent via-orange-500 to-transparent group-hover:w-full transition-all duration-300"></div>
                    </button>
                    {index < 5 && <div className="text-amber-600 text-xs px-1">◆</div>}
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
            </div>
            {/* Mobile menu button */}
            <div className="md:hidden flex-shrink-0">
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
            style={{
              backgroundImage: `url('/sacbelogo.jpg?height=1080&width=1920')`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-stone-900/70 via-orange-900/60 to-amber-900/70" />
          <MayaPattern className="absolute inset-0 w-full h-full text-yellow-400 opacity-15" />
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
          <div className="mb-12 flex justify-center">
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 leading-tight font-serif">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-red-300 to-yellow-400 tracking-wider drop-shadow-2xl">

            </span>
            <span className="block text-lg md:text-2xl text-orange-200/80 font-light tracking-wider mt-4 italic">
            
            </span>
          </h1>

          <div className="max-w-5xl mx-auto mb-12">
            <p className="text-2xl md:text-3xl lg:text-4xl text-orange-100 leading-relaxed font-light mb-6">
           
            </p>
            <p className="text-lg md:text-xl text-yellow-200/90 leading-relaxed">
             
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
              onClick={() => scrollToSection("reservas")}
              className="group relative px-12 py-5 bg-gradient-to-r from-pink-600 to-pink-500 hover:from-pink-500 hover:to-pink-400 text-white font-bold text-xl rounded-full transition-all duration-300 shadow-2xl hover:shadow-pink-500/30 transform hover:scale-105"
            >
              <span className="relative z-10">Reservar Mesa</span>
            </button>

            <button
              onClick={() => scrollToSection("menu")}
              className="px-12 py-5 border-2 border-yellow-400 text-yellow-200 hover:bg-yellow-400 hover:text-stone-900 font-bold text-xl rounded-full transition-all duration-300 backdrop-blur-sm"
            >
              Ver Menú
            </button>
          </div>

          <div className="mt-12 flex justify-center">
           
          </div>
        </div>
      </section>

      {/* Historia Section */}
      <section
        id="historia"
        className="py-24 bg-gradient-to-br from-stone-50 to-orange-100 relative fade-section opacity-0"
      >
        <MayaPattern className="absolute inset-0 w-full h-full text-green-600 opacity-5" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-pink-600 mb-6 tracking-wide font-serif">
              FOOD TRUCK TURÍSTICO Y CULTURAL
            </h2>
            <p className="text-2xl text-green-600 mb-4 italic">Gastronomía, Historia y Tradiciones de Yucatán</p>
            <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-stone-50/90 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-orange-200/50">
              <h3 className="text-3xl font-bold text-green-700 mb-6 font-serif">Nuestra Propuesta Única</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                <span className="text-2xl text-pink-600 font-bold">Sac-Bé</span> es un food truck turístico y cultural
                que combina la auténtica gastronomía yucateca con su rica historia y tradiciones milenarias.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Nuestro menú está conformado por seis platillos representativos de distintos municipios del estado de
                Yucatán, además de cuatro combos especiales que incluyen platillo, bebida y postre típico.
              </p>
              <div className="bg-green-50 rounded-2xl p-6 border-l-4 border-green-500">
                <p className="text-green-800 font-medium italic">
                  "Una fusión única de gastronomía, cultura y turismo local en una experiencia unica."
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-2xl p-8 border border-yellow-200">
                <h4 className="text-xl font-bold text-orange-800 mb-4 flex items-center">
                  <Award className="mr-3 text-orange-600" size={24} />
                  Horarios de Operación
                </h4>
                <ul className="text-gray-700 space-y-2">
                  <li>
                    • <strong>Días:</strong> Miércoles a Domingo
                  </li>
                  <li>
                    • <strong>Apertura:</strong> 5:30 PM
                  </li>
                  <li>
                    • <strong>Servicio:</strong> 6:00 PM - 11:00 PM
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-green-100 to-pink-100 rounded-2xl p-8 border border-green-200">
                <h4 className="text-xl font-bold text-green-800 mb-4 flex items-center">
                  <Heart className="mr-3 text-pink-600" size={24} />
                  Valor Añadido
                </h4>
                <ul className="text-gray-700 space-y-2">
                  <li>• Proyecciones en idioma maya con subtítulos</li>
                  <li>• Colaboración directa con productores locales</li>
                  <li>• Turismo gastronómico rodante</li>
                  <li>• Experiencia cultural inmersiva</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-pink-100 to-orange-100 rounded-2xl p-8 border border-pink-200">
                <h4 className="text-xl font-bold text-pink-800 mb-4 flex items-center">
                  <Utensils className="mr-3 text-pink-600" size={24} />
                  Compromiso Local
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  Trabajamos directamente con productores y negocios de cada municipio, fortaleciendo la economía local
                  y creando una red de colaboración comunitaria.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menú Section */}
      <section id="menu" className="py-24 bg-gradient-to-br from-green-50 to-pink-50 relative fade-section opacity-0">
        <MayaPattern className="absolute inset-0 w-full h-full text-orange-600 opacity-5" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-pink-600 mb-6 tracking-wide font-serif">
              NUESTRO MENÚ
            </h2>
            <p className="text-2xl text-green-600 mb-4 italic">6 Platillos de 6 Municipios Yucatecos</p>
            <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Cada platillo representa un municipio específico de Yucatán, preparado con ingredientes frescos y
              auténticos de la región
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {platillos.map((platillo, index) => (
              <div
                key={index}
                className="group relative bg-stone-50/95 backdrop-blur-sm rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden border border-orange-200/50 hover:border-pink-300/70 transform hover:-translate-y-2"
              >
                <div className="relative h-32 bg-gradient-to-br from-yellow-400 via-orange-400 to-pink-400 flex items-center justify-between px-8">
                  <div className="flex items-center space-x-4">
                    <div className="text-5xl group-hover:scale-110 transition-transform duration-300">
                      {platillo.icono}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white font-serif">{platillo.nombre}</h3>
                      <p className="text-yellow-100 text-sm italic">{platillo.nombreMaya}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="bg-stone-50/90 backdrop-blur-sm rounded-full px-4 py-2 mb-2">
                      <span className="text-green-700 font-bold text-lg">{platillo.precio}</span>
                    </div>
                    <div className="text-white text-xs">{platillo.tiempo}</div>
                  </div>
                  <MayaPattern className="absolute inset-0 w-full h-full text-white opacity-10" />
                </div>

                <div className="p-8">
                  <div className="mb-6">
                    <div className="flex items-center mb-4">
                      <div className="w-4 h-4 bg-pink-500 rounded-full mr-2"></div>
                      <span className="text-pink-600 font-bold text-lg">{platillo.origen}</span>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-4">{platillo.descripcion}</p>
                    <div className="bg-green-50 rounded-2xl p-4 mb-4">
                      <p className="text-green-800 text-sm italic font-medium">{platillo.historia}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-bold text-green-700 mb-3 tracking-wide">INGREDIENTES LOCALES:</h4>
                    <div className="flex flex-wrap gap-2">
                      {platillo.ingredientes.map((ingrediente, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gradient-to-r from-yellow-100 to-orange-100 text-orange-800 text-xs rounded-full border border-yellow-200"
                        >
                          {ingrediente}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="text-3xl font-bold text-green-700">{platillo.precio}</div>
                    <button className="px-6 py-3 bg-gradient-to-r from-pink-500 to-pink-400 hover:from-pink-400 hover:to-pink-300 text-white font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                      Ordenar
                    </button>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 via-pink-500 to-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Combos Section */}
      <section
        id="combos"
        className="py-24 bg-gradient-to-br from-yellow-50 to-green-50 relative fade-section opacity-0"
      >
        <MayaPattern className="absolute inset-0 w-full h-full text-pink-600 opacity-5" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-green-600 mb-6 tracking-wide font-serif">
              COMBOS ESPECIALES
            </h2>
            <p className="text-2xl text-pink-600 mb-4 italic">4 Combos que Incluyen Platillo, Bebida y Postre</p>
            <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto rounded-full mb-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {combos.map((combo, index) => (
              <div
                key={index}
                className="group bg-stone-50/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-orange-200/50 hover:border-pink-300/70 transform hover:-translate-y-1"
              >
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-green-700 mb-2 font-serif">{combo.nombre}</h3>
                  <div className="flex justify-center space-x-2 mb-4">
                    {combo.municipios.map((municipio, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gradient-to-r from-pink-100 to-orange-100 text-pink-700 text-sm rounded-full border border-pink-200"
                      >
                        {municipio}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-4">{combo.descripcion}</p>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-bold text-green-700 mb-3 tracking-wide">INCLUYE:</h4>
                  <ul className="space-y-2">
                    {combo.incluye.map((item, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                  <div className="text-3xl font-bold text-pink-600">{combo.precio}</div>
                  <button className="px-6 py-3 bg-gradient-to-r from-green-500 to-green-400 hover:from-green-400 hover:to-green-300 text-white font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                    Ordenar Combo
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Postres y Bebidas */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-stone-50/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-orange-200/50">
              <h3 className="text-3xl font-bold text-orange-700 mb-6 font-serif text-center">Postres Típicos</h3>
              <div className="space-y-4">
                {postres.map((postre, index) => (
                  <div key={index} className="flex justify-between items-center p-4 bg-orange-50 rounded-2xl">
                    <div>
                      <h4 className="font-bold text-orange-800">{postre.nombre}</h4>
                      <p className="text-sm text-gray-600">{postre.descripcion}</p>
                    </div>
                    <span className="text-lg font-bold text-orange-600">{postre.precio}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-stone-50/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-orange-200/50">
              <h3 className="text-3xl font-bold text-green-700 mb-6 font-serif text-center">Bebidas Frescas</h3>
              <div className="space-y-4">
                {bebidas.map((bebida, index) => (
                  <div key={index} className="flex justify-between items-center p-4 bg-green-50 rounded-2xl">
                    <div>
                      <h4 className="font-bold text-green-800">{bebida.nombre}</h4>
                      <p className="text-sm text-gray-600">{bebida.descripcion}</p>
                    </div>
                    <span className="text-lg font-bold text-green-600">{bebida.precio}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ingredientes Locales Section */}
      <section
        id="ingredientes"
        className="py-24 bg-gradient-to-br from-stone-50 to-orange-100 relative fade-section opacity-0"
      >
        <MayaPattern className="absolute inset-0 w-full h-full text-green-600 opacity-5" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-pink-600 mb-6 tracking-wide font-serif">
              INGREDIENTES SAGRADOS
            </h2>
            <p className="text-2xl text-green-600 mb-4 italic">Ingredientes Locales de la Península</p>
            <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Cada ingrediente que utilizamos proviene directamente de productores mayas locales, preservando la pureza
              y autenticidad de los sabores ancestrales
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ingredientesLocales.map((ingrediente, index) => (
              <div
                key={index}
                className="group bg-stone-50/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-orange-200/50 hover:border-green-300/70 transform hover:-translate-y-1"
              >
                <div className="flex items-start space-x-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-pink-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Leaf className="w-10 h-10 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-green-800 mb-2 font-serif">{ingrediente.nombre}</h3>
                    <p className="text-pink-600 font-medium mb-3 italic">"{ingrediente.nombreMaya}"</p>
                    <p className="text-gray-700 leading-relaxed mb-4">{ingrediente.descripcion}</p>
                    <div className="flex items-center text-sm text-green-600">
                      <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                      <span className="font-medium">{ingrediente.origen}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-green-100 to-pink-100 rounded-3xl p-12 border border-green-200">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-green-800 mb-6 font-serif">Compromiso con la Comunidad</h3>
              <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto mb-8">
                Trabajamos directamente con más de 50 familias mayas productoras en toda la península de Yucatán. Cada
                compra que realizas apoya la economía local y ayuda a preservar las técnicas agrícolas tradicionales que
                han sido transmitidas durante generaciones.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-700 mb-2">50+</div>
                  <p className="text-green-600 font-medium">Familias Productoras</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-700 mb-2">100%</div>
                  <p className="text-green-600 font-medium">Ingredientes Locales</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-700 mb-2">15</div>
                  <p className="text-green-600 font-medium">Municipios Aliados</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ubicaciones Section */}
      <section
        id="ubicaciones"
        className="py-24 bg-gradient-to-br from-pink-50 to-orange-50 relative fade-section opacity-0"
      >
        <MayaPattern className="absolute inset-0 w-full h-full text-green-600 opacity-5" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-pink-600 mb-6 tracking-wide font-serif">
              NUESTRAS UBICACIONES
            </h2>
            <p className="text-2xl text-green-600 mb-4 italic">Puntos Estratégicos en Mérida</p>
            <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Nos ubicamos en los parques más emblemáticos de Mérida y participamos en eventos importantes de la ciudad
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {ubicaciones.map((ubicacion, index) => (
              <div
                key={index}
                className="group bg-stone-50/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-orange-200/50 hover:border-pink-300/70 transform hover:-translate-y-1"
              >
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-pink-500 to-orange-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-green-700 mb-2 font-serif">{ubicacion.nombre}</h3>
                  <p className="text-pink-600 font-medium mb-3">{ubicacion.horario}</p>
                  <p className="text-gray-600 text-sm">{ubicacion.descripcion}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-3xl p-12 border border-yellow-200">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-orange-800 mb-6 font-serif">Eventos Especiales</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-4xl mx-auto">
                También participamos en eventos importantes de la ciudad como La Noche Blanca, Biciruta Nocturna y
                Mérida en Domingo, llevando la auténtica gastronomía yucateca a donde estés.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-orange-700 mb-2">3</div>
                  <p className="text-orange-600 font-medium">Ubicaciones Fijas</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-orange-700 mb-2">5</div>
                  <p className="text-orange-600 font-medium">Días de Servicio</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-orange-700 mb-2">5.5</div>
                  <p className="text-orange-600 font-medium">Horas de Operación</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experiencia Cultural Section */}
      <section
        id="experiencia"
        className="py-24 bg-gradient-to-br from-green-50 to-yellow-50 relative fade-section opacity-0"
      >
        <MayaPattern className="absolute inset-0 w-full h-full text-pink-600 opacity-5" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-green-600 mb-6 tracking-wide font-serif">
              EXPERIENCIA CULTURAL
            </h2>
            <p className="text-2xl text-pink-600 mb-4 italic">Gastronomía + Cultura + Historia</p>
            <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Más que un food truck, somos una experiencia cultural completa que combina sabores auténticos con
              tradiciones milenarias
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {eventos.map((evento, index) => (
              <div
                key={index}
                className="group bg-stone-50/95 backdrop-blur-sm rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 border border-orange-200/50 hover:border-pink-300/70 transform hover:-translate-y-2 overflow-hidden"
              >
                <div className="relative h-24 bg-gradient-to-r from-green-600 to-pink-600 flex items-center justify-center">
                  <h3 className="text-xl font-bold text-white text-center font-serif px-4">{evento.nombre}</h3>
                  <MayaPattern className="absolute inset-0 w-full h-full text-white opacity-10" />
                </div>

                <div className="p-8">
                  <p className="text-pink-600 font-bold mb-2 italic text-lg">"{evento.nombreMaya}"</p>
                  <p className="text-gray-700 leading-relaxed mb-6">{evento.descripcion}</p>

                  <div className="space-y-3">
                    <div className="flex items-center text-green-700">
                      <Clock className="w-5 h-5 mr-3" />
                      <span className="font-medium">{evento.horario}</span>
                    </div>
                    <div className="flex items-center text-orange-600">
                      <Calendar className="w-5 h-5 mr-3" />
                      <span className="font-medium">{evento.duracion}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-pink-100 to-orange-100 rounded-3xl p-12 border border-pink-200">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-pink-800 mb-6 font-serif">Innovación Cultural</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-500 to-pink-500 rounded-full flex items-center justify-center">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-green-700 mb-2">Proyecciones en Maya</h4>
                  <p className="text-gray-600 text-sm">Videos culturales con subtítulos en español e inglés</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-orange-700 mb-2">Productores Locales</h4>
                  <p className="text-gray-600 text-sm">Colaboración directa con comunidades rurales</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-pink-500 to-green-500 rounded-full flex items-center justify-center">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-pink-700 mb-2">Turismo Rodante</h4>
                  <p className="text-gray-600 text-sm">Experiencia cultural itinerante única</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Galería y Testimonios */}
      <section
        id="galeria"
        className="py-24 bg-gradient-to-br from-orange-50 to-pink-50 relative fade-section opacity-0"
      >
        <MayaPattern className="absolute inset-0 w-full h-full text-green-600 opacity-5" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-pink-600 mb-6 tracking-wide font-serif">
              GALERÍA Y TESTIMONIOS
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto rounded-full mb-8"></div>
          </div>

          <div className="relative mb-20">
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
                  <p className="text-yellow-200">Experiencia gastronómica y cultural</p>
                </div>
              </div>
            </div>

            <button
              onClick={() => setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-stone-50/90 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-stone-100 transition-all duration-200"
            >
              <ChevronLeft className="w-6 h-6 text-green-700" />
            </button>
            <button
              onClick={() => setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-stone-50/90 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-stone-100 transition-all duration-200"
            >
              <ChevronRight className="w-6 h-6 text-green-700" />
            </button>

            <div className="flex justify-center mt-6 space-x-2">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentImageIndex ? "bg-green-600" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-center text-green-800 mb-12 font-serif">
              Testimonios de Nuestros Visitantes
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonios.map((testimonio, index) => (
                <div
                  key={index}
                  className="bg-stone-50/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-orange-200/50"
                >
                  <div className="flex mb-4">
                    {[...Array(testimonio.calificacion)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic mb-6 leading-relaxed">"{testimonio.testimonio}"</p>
                  <div>
                    <p className="font-bold text-green-700">{testimonio.nombre}</p>
                    <p className="text-sm text-pink-600">{testimonio.origen}</p>
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
        className="py-24 bg-gradient-to-br from-green-50 to-pink-50 relative fade-section opacity-0"
      >
        <MayaPattern className="absolute inset-0 w-full h-full text-orange-600 opacity-5" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-pink-600 mb-6 tracking-wide font-serif">
              RESERVA TU MESA
            </h2>
            <p className="text-2xl text-green-600 mb-4 italic">Asegura tu Experiencia Cultural</p>
            <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-600 leading-relaxed">
              Reserva tu mesa en nuestro food truck turístico. Incluye área de mesas, proyecciones culturales y la mejor
              gastronomía yucateca.
            </p>
          </div>

          <div className="bg-stone-50/95 backdrop-blur-sm rounded-3xl shadow-2xl p-12 border border-orange-200/50">
            <form onSubmit={handleFormSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-bold text-green-700 mb-3 tracking-wide">
                    NOMBRE COMPLETO *
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleInputChange}
                    required
                    className="w-full px-6 py-4 border-2 border-orange-200 rounded-2xl focus:ring-4 focus:ring-green-500/20 focus:border-green-500 transition-all duration-300 bg-stone-50/80 backdrop-blur-sm"
                    placeholder="Tu nombre completo"
                  />
                </div>

                <div>
                  <label htmlFor="telefono" className="block text-sm font-bold text-green-700 mb-3 tracking-wide">
                    TELÉFONO *
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleInputChange}
                    required
                    className="w-full px-6 py-4 border-2 border-orange-200 rounded-2xl focus:ring-4 focus:ring-green-500/20 focus:border-green-500 transition-all duration-300 bg-stone-50/80 backdrop-blur-sm"
                    placeholder="+52 999 123 4567"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-green-700 mb-3 tracking-wide">
                    CORREO ELECTRÓNICO *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-6 py-4 border-2 border-orange-200 rounded-2xl focus:ring-4 focus:ring-green-500/20 focus:border-green-500 transition-all duration-300 bg-stone-50/80 backdrop-blur-sm"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="personas" className="block text-sm font-bold text-green-700 mb-3 tracking-wide">
                    NÚMERO DE PERSONAS *
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
                    className="w-full px-6 py-4 border-2 border-orange-200 rounded-2xl focus:ring-4 focus:ring-green-500/20 focus:border-green-500 transition-all duration-300 bg-stone-50/80 backdrop-blur-sm"
                    placeholder="¿Cuántas personas?"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="fecha" className="block text-sm font-bold text-green-700 mb-3 tracking-wide">
                    FECHA *
                  </label>
                  <input
                    type="date"
                    id="fecha"
                    name="fecha"
                    value={formData.fecha}
                    onChange={handleInputChange}
                    required
                    className="w-full px-6 py-4 border-2 border-orange-200 rounded-2xl focus:ring-4 focus:ring-green-500/20 focus:border-green-500 transition-all duration-300 bg-stone-50/80 backdrop-blur-sm"
                  />
                </div>

                <div>
                  <label htmlFor="hora" className="block text-sm font-bold text-green-700 mb-3 tracking-wide">
                    HORA *
                  </label>
                  <input
                    type="time"
                    id="hora"
                    name="hora"
                    value={formData.hora}
                    onChange={handleInputChange}
                    required
                    min="18:00"
                    max="23:00"
                    className="w-full px-6 py-4 border-2 border-orange-200 rounded-2xl focus:ring-4 focus:ring-green-500/20 focus:border-green-500 transition-all duration-300 bg-stone-50/80 backdrop-blur-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="evento" className="block text-sm font-bold text-green-700 mb-3 tracking-wide">
                  UBICACIÓN PREFERIDA (OPCIONAL)
                </label>
                <select
                  id="evento"
                  name="evento"
                  value={formData.evento}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 border-2 border-orange-200 rounded-2xl focus:ring-4 focus:ring-green-500/20 focus:border-green-500 transition-all duration-300 bg-stone-50/80 backdrop-blur-sm"
                >
                  <option value="">Cualquier ubicación</option>
                  <option value="americas">Parque de las Américas</option>
                  <option value="plancha">Parque la Plancha</option>
                  <option value="montejo">Paseo de Montejo</option>
                  <option value="evento">Evento especial</option>
                </select>
              </div>

              <div>
                <label htmlFor="comentarios" className="block text-sm font-bold text-green-700 mb-3 tracking-wide">
                  COMENTARIOS ADICIONALES (OPCIONAL)
                </label>
                <textarea
                  id="comentarios"
                  name="comentarios"
                  value={formData.comentarios}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-6 py-4 border-2 border-orange-200 rounded-2xl focus:ring-4 focus:ring-green-500/20 focus:border-green-500 transition-all duration-300 bg-stone-50/80 backdrop-blur-sm resize-none"
                  placeholder="Alergias, preferencias especiales, celebraciones..."
                />
              </div>

              <div className="bg-green-50 rounded-2xl p-6 border border-green-200">
                <h4 className="text-lg font-bold text-green-800 mb-3">Tu experiencia incluye:</h4>
                <ul className="text-green-700 space-y-2">
                  <li>• Mesa en área con proyecciones culturales</li>
                  <li>• Videos en maya con subtítulos en español e inglés</li>
                  <li>• Música regional yucateca de fondo</li>
                  <li>• Platillos con ingredientes 100% locales</li>
                  <li>• Historia y tradiciones de cada municipio</li>
                </ul>
              </div>

              <div className="text-center pt-8">
                <button
                  type="submit"
                  className="group relative px-16 py-6 bg-gradient-to-r from-pink-600 to-green-600 hover:from-pink-500 hover:to-green-500 text-white font-bold text-xl rounded-full transition-all duration-300 shadow-2xl hover:shadow-pink-500/25 transform hover:scale-105"
                >
                  <span className="relative z-10">CONFIRMAR RESERVA</span>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 to-orange-300 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </button>
                <p className="text-sm text-gray-600 mt-4">
                  Te contactaremos por WhatsApp y email en menos de 30 minutos
                </p>
                <p className="text-xs text-gray-500 mt-2">
                  Horario de servicio: Miércoles a Domingo, 6:00 PM - 11:00 PM
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-stone-200 via-amber-100 to-stone-200 text-stone-800 py-20 relative">
        <MayaPattern className="absolute inset-0 w-full h-full text-orange-600 opacity-10" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Logo y descripción */}
            <div className="text-center md:text-left">
              <div className="mb-6">
                <SacBeLogo size="medium" />
              </div>
              <p className="text-stone-700 leading-relaxed">
                Gastronomía, cultura y turismo yucateco en una experiencia móvil única. Preservando tradiciones desde
                2024.
              </p>
            </div>

            {/* Contacto */}
            <div className="text-center">
              <h4 className="text-xl font-bold text-orange-700 mb-6 font-serif">CONTACTO</h4>
              <div className="space-y-4">
                <div className="flex items-center justify-center space-x-3">
                  <Phone className="w-5 h-5 text-orange-600" />
                  <span className="text-stone-700">+52 999 123 4567</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <Mail className="w-5 h-5 text-orange-600" />
                  <span className="text-stone-700">hola@sacbe-yucatan.com</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <div className="w-5 h-5 bg-orange-500 rounded-full"></div>
                  <span className="text-stone-700">Mérida, Yucatán</span>
                </div>
              </div>
            </div>

            {/* Redes Sociales */}
            <div className="text-center md:text-right">
              <h4 className="text-xl font-bold text-orange-700 mb-6 font-serif">SÍGUENOS</h4>
              <div className="flex justify-center md:justify-end space-x-6 mb-6">
                <a
                  href="#"
                  className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-full flex items-center justify-center hover:from-orange-400 hover:to-amber-400 transition-all duration-300 transform hover:scale-110"
                >
                  <Instagram className="w-6 h-6 text-white" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-gradient-to-br from-amber-600 to-yellow-500 rounded-full flex items-center justify-center hover:from-amber-500 hover:to-yellow-400 transition-all duration-300 transform hover:scale-110"
                >
                  <Facebook className="w-6 h-6 text-white" />
                </a>
              </div>
              <p className="text-stone-600 text-sm">@sacbe_foodtruck</p>
            </div>
          </div>

          <div className="border-t border-amber-300 pt-8">
            <div className="text-center">
              <div className="w-32 h-1 bg-gradient-to-r from-orange-400 to-amber-400 mx-auto rounded-full mb-6"></div>
              <p className="text-lg mb-4 text-stone-700">
                © 2025 Sac-Bé Food Truck Turístico. Todos los derechos reservados.
              </p>
              <p className="text-stone-600 text-sm italic">
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
          background: linear-gradient(135deg, #f5f5f4 0%, #fed7aa 50%, #fef3c7 100%);
        }

        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: #f5f5f4;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #059669, #db2777);
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #047857, #be185d);
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
