import React, { useState } from 'react';
import { Phone, Home, Heart, Instagram, Facebook, Flower, Gift, Star, MapPin, Mail, Clock } from 'lucide-react';

function App() {
  const whatsappNumber = '+573205942263';
  const whatsappLink = `https://wa.me/${+573205942263}`;
  const [categoriaActiva, setCategoriaActiva] = useState('todos');

  const categorias = [
    { id: 'todos', nombre: 'Todos los Productos', icono: Star },
    { id: 'ramos', nombre: 'Ramos Clásicos', icono: Flower },
    { id: 'peluches', nombre: 'Ramos con Peluche', icono: Gift },
    { id: 'especiales', nombre: 'Ramos Personalizados', icono: Heart }
  ];

  const productos = [
    {
      id: 1,
      categoria: 'ramos',
      title: "Ramo de Rosas Rojas Clásico",
      description: "Elegantes rosas rojas con follaje, perfectas para expresar amor.",
      price: "€45.99",
      image: "https://justflowers.cl/cdn/shop/products/cilindro_2_1_600x600_crop_center.jpg?v=1580851232"
    },
    {
      id: 2,
      categoria: 'peluches',
      title: "Dulce Amor",
      description: "Rosas rosadas con un tierno osito de peluche, ideal para enamorar.",
      price: "€69.99",
      image: "https://www.florespereira.com/media/catalog/product/cache/e42099f6fc21731ccc9219667607bb64/r/a/ramo_de_rosas_de_colores_con_canasto_y_oso_de_peluche__3.jpg"
    },
    {
      id: 3,
      categoria: 'especiales',
      title: "Corazón de Rosas",
      description: "Arreglo en forma de corazón con rosas rojas, símbolo de amor eterno.",
      price: "€89.99",
      image: "https://www.florespereira.com/media/catalog/product/cache/e42099f6fc21731ccc9219667607bb64/r/a/ramo_de_rosas_en_caja_de_lujo_corazon_por_24_rosas.jpg"
    },
    {
      id: 4,
      categoria: 'ramos',
      title: "Primavera Multicolor",
      description: "Colorido mix de rosas, girasoles y margaritas, lleno de alegría.",
      price: "€54.99",
      image: "https://www.adoomicilio.com/img/tiendas/264/1/11781.jpg"
    },
    {
      id: 5,
      categoria: 'peluches',
      title: "Sorpresa Completa",
      description: "Rosas rojas con globos y chocolates, el regalo perfecto.",
      price: "€80.99",
      image: "https://www.floristeriarosascali.com/wp-content/uploads/2020/09/Corazon-Chocolates-Burbuja-1.jpg"
    },
    {
      id: 6,
      categoria: 'especiales',
      title: "Ramos Personalizados",
      description: "Diseños únicos para cada ocasión especial.",
      price: "€99.99",
      image: "https://cdnx.jumpseller.com/rose-di-palace/image/44769525/resize/640/640?1706197729"
    },
    {
      id: 7,
      categoria: 'ramos',
      title: "Ramos de Mano",
      description: "Delicado ramo atado a mano, elegante y sofisticado.",
      price: "€65.99",
      image: "https://floristeriasguate.com/wp-content/uploads/2020/01/Ramo-de-Rosas-y-Girasoles.jpg"
    },
    {
      id: 8,
      categoria: 'peluches',
      title: "Amor Dulce",
      description: "Cofre de Rosas, elegante y sotisficado.",
      price: "€75.99",
      image: "https://www.yaakunflores.com/uploads/arreglos/rosas-eternas-en-cofre-mediano-blanco-con-rosas-rojas.jpg"
    },
    {
      id: 9,
      categoria: 'especiales',
      title: "Luna de Amor",
      description: "Arreglo en caja luna con rosas preservadas",
      price: "€120.99",
      image: "https://www.lovinglavanda.com/wp-content/uploads/2020/08/lunapreservadaRosa.jpg"
    },
  
    {
      "id": 10,
      "categoria": "ramos",
      "title": "Brisa Dorada",
      "description": "Rosas naranjas y amarillas con lirios, evocando la calidez del sol.",
      "price": "€59.99",
      "image": "https://img.teleflora.com/images/o_0/l_flowers:TEV68-1A,pg_6/w_272,h_340,cs_no_cmyk,c_pad,g_south/f_auto,q_auto:eco,e_sharpen:200/flowers/TEV68-1A/Teleflora'sSpreadSunshineBouquet"
    },
    {
      "id": 11,
      "categoria": "peluches",
      "title": "Abrazo de Amor",
      "description": "Rosas rojas con un adorable peluche y un globo metálico.",
      "price": "€85.99",
      "image": "https://afectofloristeria.com/wp-content/uploads/2023/04/40.png"
    },
    {
      "id": 12,
      "categoria": "especiales",
      "title": "Encanto Eterno",
      "description": "Rosas preservadas en una elegante caja acrílica con luz tenue.",
      "price": "€149.99",
      "image": "https://difavolafloristeria.com/wp-content/uploads/2023/09/DSC04812.jpg"
    }
      
  ];

  const productosFiltrados = categoriaActiva === 'todos' 
    ? productos 
    : productos.filter(p => p.categoria === categoriaActiva);

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-rose-100 to-pink-50">
      {/* Navegación */}
      <nav className="bg-white/90 backdrop-blur-sm fixed w-full z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Heart className="h-8 w-8 text-rose-500" />
              <span className="ml-2 text-2xl font-serif text-gray-800">Flores Encantadas</span>
            </div>
            <div className="flex space-x-4">
              <a href="#inicio" className="text-gray-700 hover:text-rose-500 px-3 py-2 rounded-md flex items-center">
                <Home className="h-5 w-5 mr-1" />
                Inicio
              </a>
              <a href="#contacto" className="text-gray-700 hover:text-rose-500 px-3 py-2 rounded-md flex items-center">
                <Phone className="h-5 w-5 mr-1" />
                Contacto
              </a>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" 
                 className="bg-green-500 text-white px-4 py-2 rounded-full flex items-center hover:bg-green-600 transition-colors">
                <Phone className="h-5 w-5 mr-2" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="pt-24 pb-12 bg-[url('https://images.unsplash.com/photo-1558350315-8aa00e8e4590?auto=format&fit=crop&q=80&w=1920')] bg-cover bg-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 text-center">
            <h1 className="text-4xl sm:text-6xl font-serif text-gray-800 mb-6">
              Flores Encantadas
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Creando momentos mágicos con nuestros hermosos arreglos florales. Cada ramo cuenta una historia de amor, 
              celebración y belleza. Déjanos ser parte de tus momentos especiales.
            </p>
            <div className="flex justify-center space-x-6">
              <div className="text-center">
                <Clock className="h-8 w-8 text-rose-500 mx-auto mb-2" />
                <p className="font-semibold">Lunes a Viernes</p>
                <p>9:00 - 20:00</p>
              </div>
              <div className="text-center">
                <Phone className="h-8 w-8 text-rose-500 mx-auto mb-2" />
                <p className="font-semibold">Numero de Telefono</p>
                <p>Desconocido</p>
              </div>
              <div className="text-center">
                <MapPin className="h-8 w-8 text-rose-500 mx-auto mb-2" />
                <p className="font-semibold">Ubicación</p>
                <p>No hay punto directo disponible</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categorías */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categorias.map((cat) => {
              const Icon = cat.icono;
              return (
                <button
                  key={cat.id}
                  onClick={() => setCategoriaActiva(cat.id)}
                  className={`flex items-center px-6 py-3 rounded-full transition-all ${
                    categoriaActiva === cat.id
                      ? 'bg-rose-500 text-white shadow-lg scale-105'
                      : 'bg-white text-gray-700 hover:bg-rose-100'
                  }`}
                >
                  <Icon className="h-5 w-5 mr-2" />
                  {cat.nombre}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Galería de Productos */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {productosFiltrados.map((producto) => (
              <div key={producto.id} 
                   className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="relative">
                  <img src={producto.image} alt={producto.title} 
                       className="w-full h-64 object-cover" />
                  <div className="absolute top-4 right-4">
                    <span className="bg-rose-500 text-white px-4 py-2 rounded-full font-semibold">
                      {producto.price}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif text-gray-800 mb-2">{producto.title}</h3>
                  <p className="text-gray-600 mb-4">{producto.description}</p>
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer" 
                     className="block text-center bg-rose-500 text-white px-6 py-3 rounded-lg hover:bg-rose-600 transition-colors">
                    Ordenar por WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Información de Contacto */}
      <section id="contacto" className="py-12 bg-white/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif text-center text-gray-800 mb-8">Contacto</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <Phone className="h-10 w-10 text-rose-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Teléfonos</h3>
              <p>Movil:Desconocido</p>
              <p>Móvil secundario: Desconocido</p>
              <p>WhatsApp: {whatsappNumber}</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <Clock className="h-10 w-10 text-rose-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Horario</h3>
              <p>Lunes a Viernes: 10:00 - 20:00</p>
              <p>Sábados: 9:00 - 18:00</p>
              <p>Domingos: No se trabaja</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <MapPin className="h-10 w-10 text-rose-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Ubicación</h3>
              <p>Calle Desconocida</p>
              <p>Pais-España</p>
              <p>Metro: Desconocido</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white/90 backdrop-blur-sm py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center">
            <div className="flex items-center mb-6">
              <Heart className="h-10 w-10 text-rose-500" />
              <span className="ml-2 text-3xl font-serif text-gray-800">Flores Encantadas</span>
            </div>
            <div className="flex space-x-6 mb-6">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-600 hover:text-rose-500 transition-colors">
                <Instagram className="h-8 w-8" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-600 hover:text-rose-500 transition-colors">
                <Facebook className="h-8 w-8" />
              </a>
              <a href="mailto:info@floresencantadas.com" className="text-gray-600 hover:text-rose-500 transition-colors">
                <Mail className="h-8 w-8" />
              </a>
            </div>
            <p className="text-gray-600 text-center">
              © 2025 Flores Encantadas. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;