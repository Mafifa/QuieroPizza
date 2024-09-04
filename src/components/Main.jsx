import { useState, useEffect } from 'react'
import { MapPin, Phone, Mail, ChevronUp, Pizza, Sun, Heart, Star, Zap, Smile, Shield, Flag, Menu, X } from 'lucide-react'
import Carrusel from './Carrusel'
import { ContactInfo } from './ContactInfo'

export default function LandingPage () {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.pageYOffset > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Header */}
      <header className="bg-red-600 text-white sticky top-0 z-50">
        <nav className="container mx-auto px-6 py-3">
          <div className="flex justify-between items-center">
            <a href="#" className="text-2xl font-bold">QuieroPizza</a>
            <div className="hidden md:flex space-x-4">
              <a href="#inicio" className="hover:text-red-200">Inicio</a>
              <a href="#pizzas" className="hover:text-red-200">Pizzas</a>
              <a href="#recuerdos" className="hover:text-red-200">Recuerdos</a>
              <a href="#experiencias" className="hover:text-red-200">Experiencias</a>
              <a href="#nosotros" className="hover:text-red-200">Nosotros</a>
              <a href="#contacto" className="hover:text-red-200">Contacto</a>
            </div>
            <button
              className="md:hidden text-white focus:outline-none"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
        {/* Mobile menu */}
        <div
          className={`fixed inset-0 bg-red-600 bg-opacity-95 z-50 transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'
            } transition-transform duration-300 ease-in-out`}
        >
          <div className="flex justify-end p-4">
            <button
              className="text-white"
              onClick={toggleMenu}
              aria-label="Cerrar menú"
            >
              <X size={24} />
            </button>
          </div>
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            <a href="#inicio" className="text-white text-2xl" onClick={closeMenu}>Inicio</a>
            <a href="#pizzas" className="text-white text-2xl" onClick={closeMenu}>Pizzas</a>
            <a href="#recuerdos" className="text-white text-2xl" onClick={closeMenu}>Recuerdos</a>
            <a href="#experiencias" className="text-white text-2xl" onClick={closeMenu}>Experiencias</a>
            <a href="#nosotros" className="text-white text-2xl" onClick={closeMenu}>Nosotros</a>
            <a href="#contacto" className="text-white text-2xl" onClick={closeMenu}>Contacto</a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="bg-red-700 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">Bienvenido a QuieroPizza</h1>
          <p className="text-xl mb-8">Las mejores pizzas de Cumaná con vistas inolvidables. Ven a disfrutar de nuestros sabores únicos en un ambiente que recordarás por siempre.</p>
          <a href="#contacto" className="bg-white text-red-700 py-2 px-6 rounded-full text-lg font-semibold hover:bg-red-100 transition duration-300">Haz tu Pedido</a>
        </div>
      </section>

      {/* Pizzas Section */}
      <section id="pizzas" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-red-800 mb-12">Nuestras Pizzas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard icon={<Pizza size={40} />} title="Pizza Margarita" description="Una clásica que nunca falla, hecha con los ingredientes más frescos." />
            <ServiceCard icon={<Pizza size={40} />} title="Pizza Cuatro Quesos" description="Una explosión de sabor con la mezcla perfecta de cuatro quesos." />
            <ServiceCard icon={<Pizza size={40} />} title="Pizza Pepperoni" description="Pepperoni jugoso sobre una base de queso mozzarella derretido." />
            <ServiceCard icon={<Pizza size={40} />} title="Pizza Especial QuieroPizza" description="Nuestra especialidad con ingredientes secretos que te sorprenderán." />
          </div>
        </div>
      </section>

      {/* Recuerdos Section */}
      <section id="recuerdos" className="bg-red-50 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-red-800 mb-12">Recuerdos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProductCard icon={<Heart size={40} />} title="Tazas Personalizadas" description="Llévate un recuerdo de nuestra pizzería con nuestras tazas únicas." />
            <ProductCard icon={<Smile size={40} />} title="Camisetas Exclusivas" description="Vístete con nuestras camisetas temáticas y lleva QuieroPizza contigo." />
            <ProductCard icon={<Sun size={40} />} title="Postales del Atardecer" description="El atardecer desde nuestro local, capturado en postales para ti." />
          </div>
        </div>
      </section>

      <Carrusel />

      {/* Experiencias Section */}
      <section id="experiencias" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-red-800 mb-12">Experiencias Inolvidables</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <EquipmentCard title="Cenas Románticas" description="Disfruta de una cena especial con vista al mar en nuestra sede del Cumaná Plaza." />
            <EquipmentCard title="Eventos Privados" description="Reserva nuestros espacios para tus celebraciones privadas y hazlas inolvidables." />
            <EquipmentCard title="Degustaciones Exclusivas" description="Participa en nuestras degustaciones de pizzas gourmet y sorpréndete con nuevos sabores." />
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="nosotros" className="py-20 bg-gradient-to-b from-red-100 to-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-red-800 mb-16">Sobre Nosotros</h2>
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="self-center lg:w-1/2 mb-12 md:mb-0 md:-mr-24 lg:mb-0">
              <img src="/images.jpeg" alt="SumiGases Oriente Team" className="rounded-lg shadow-2xl" />
            </div>
            <div className="lg:w-1/2 lg:pl-16">
              <div className="bg-white rounded-lg shadow-xl p-8">
                <p className="text-lg text-red-800 mb-6 leading-relaxed">
                  En <span className="font-bold text-red-600">QuieroPizza</span>, nos enorgullece ofrecer no solo las mejores pizzas, sino también una experiencia culinaria única en Cumaná. Con una pasión por la excelencia, utilizamos los ingredientes más frescos y un toque de creatividad en cada pizza que servimos.
                </p>
                <p className="text-lg text-red-800 mb-8 leading-relaxed">
                  Nuestro equipo está dedicado a hacer que cada visita sea memorable, ya sea que estés disfrutando de una comida con amigos o celebrando un evento especial. <span className="font-bold text-red-600">¡Ven y vive la experiencia QuieroPizza!</span>
                </p>
                <div className="flex items-center bg-red-50 p-4 rounded-lg">
                  <div className="flex mr-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="text-yellow-400 w-6 h-6" />
                    ))}
                  </div>
                  <span className="text-red-800 font-semibold">4.9/5 basado en 500+ reseñas de nuestros servicio</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="bg-red-600 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">Contáctanos</h2>
          <p className="text-xl mb-12">Estamos aquí para ayudarte. Ya sea que quieras hacer un pedido o tengas una pregunta, no dudes en ponerte en contacto con nosotros.</p>
          <ContactInfo />
        </div>
      </section>

      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          className="fixed bottom-8 right-8 bg-red-600 text-white p-3 rounded-full shadow-lg hover:bg-red-700 transition duration-300"
          onClick={scrollToTop}
          aria-label="Ir arriba"
        >
          <ChevronUp size={24} />
        </button>
      )}
    </div>
  )
}


function ServiceCard ({ icon, title, description }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition duration-300">
      <div className="text-red-600 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-red-800 mb-2">{title}</h3>
      <p className="text-red-600">{description}</p>
    </div>
  )
}

function ProductCard ({ icon, title, description }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition duration-300">
      <div className="text-red-600 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-red-800 mb-2">{title}</h3>
      <p className="text-red-600">{description}</p>
    </div>
  )
}

function EquipmentCard ({ title, description }) {
  return (
    <div className="bg-white rounde
d-lg shadow-lg p-6 text-center hover:shadow-xl transition duration-300">
      <h3 className="text-xl font-semibold text-red-800 mb-2">{title}</h3>
      <p className="text-red-600">{description}</p>
    </div>
  )
}
