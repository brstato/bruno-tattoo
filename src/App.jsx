import './App.css'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  Instagram, 
  Facebook, 
  Phone, 
  Mail, 
  MapPin, 
  Star,
  ChevronDown,
  ChevronUp,
  MessageCircle,
  Calendar,
  Award,
  Shield,
  Heart,
  Palette
} from 'lucide-react'

// Componente SEO Head (para meta tags dinâmicas)
const SEOHead = ({ title, description, image, url }) => {
  useEffect(() => {
    if (title) document.title = title;
    
    // Atualizar meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription && description) {
      metaDescription.setAttribute('content', description);
    }
    
    // Atualizar Open Graph
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    const ogImage = document.querySelector('meta[property="og:image"]');
    const ogUrl = document.querySelector('meta[property="og:url"]');
    
    if (ogTitle && title) ogTitle.setAttribute('content', title);
    if (ogDescription && description) ogDescription.setAttribute('content', description);
    if (ogImage && image) ogImage.setAttribute('content', image);
    if (ogUrl && url) ogUrl.setAttribute('content', url);
  }, [title, description, image, url]);
  
  return null;
};

// Componente Header com melhor semântica
const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-black/90 backdrop-blur-sm z-50 border-b border-gray-800" role="banner">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold text-white"
        >
          <h1>Bruno Tattoo</h1>
        </motion.div>
        <nav className="hidden md:flex space-x-6" role="navigation" aria-label="Menu principal">
          <a href="#portfolio" className="text-gray-300 hover:text-white transition-colors" aria-label="Ver portfólio de tatuagens">Portfólio</a>
          <a href="#sobre" className="text-gray-300 hover:text-white transition-colors" aria-label="Conhecer o tatuador Bruno">Sobre</a>
          <a href="#processo" className="text-gray-300 hover:text-white transition-colors" aria-label="Entender o processo de tatuagem">Processo</a>
          <a href="#contato" className="text-gray-300 hover:text-white transition-colors" aria-label="Entrar em contato para orçamento">Contato</a>
        </nav>
      </div>
    </header>
  )
}

// Componente Hero Section otimizado
const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center relative overflow-hidden" role="main">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20" aria-hidden="true"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Bruno Tattoo
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Transformando Sonhos em arte
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-200 transition-colors"
              onClick={() => document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' })}
              aria-label="Ver portfólio de tatuagens do Bruno"
            >
              Veja Nosso Portfólio
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-black transition-colors"
              onClick={() => document.getElementById('contato').scrollIntoView({ behavior: 'smooth' })}
              aria-label="Consultas e orçamentos gratuitos para tatuagens"
            >
              Agende Sua Consulta
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Componente Portfolio otimizado
const Portfolio = () => {
  const portfolioItems = [
    { 
      id: 1, 
      style: 'Preto e cinza', 
      image: 'src/assets/batman~2.jpg',
      alt: 'Tatuagem estilo preto e cinza - Bruno Tattoo - Angra dos Reis'
    },
    { 
      id: 2, 
      style: 'Achuras', 
      image: 'src/assets/cobra.png',
      alt: 'Tatuagem estilo Achuras - Bruno Tattoo - Angra dos Reis'
    },
    { 
      id: 3, 
      style: 'Rastelado', 
      image: 'src/assets/gustavo.jpg',
      alt: 'Tatuagem estilo rastelado - Bruno Tattoo - Angra dos Reis'
    },
    { 
      id: 4, 
      style: 'Rastelado', 
      image: 'src/assets/Hercules.JPG',
      alt: 'Tatuagem estilo rastelado - Bruno Tattoo - Angra dos Reis'
    },
    { 
      id: 5, 
      style: 'Realismo', 
      image: 'src/assets/lobo.JPG',
      alt: 'Tatuagem estilo realismo - Bruno Tattoo - Angra dos Reis'
    },
    { 
      id: 6, 
      style: 'Néo tradicional', 
      image: 'src/assets/manuele.JPG',
      alt: 'Tatuagem néo tradicional - Bruno Tattoo - Angra dos Reis'
    },
    { 
      id: 7, 
      style: 'Rastelado', 
      image: 'src/assets/olho.JPG',
      alt: 'Tatuagem rastelado - Bruno Tattoo - Angra dos Reis'
    },    
    { 
      id: 8, 
      style: 'Portrait', 
      image: 'src/assets/shelbi.jpg',
      alt: 'Tatuagem portrait - Bruno Tattoo - Angra dos Reis'
    },     
    { 
      id: 9, 
      style: 'Preto e cinza', 
      image: 'src/assets/simba.jpg',
      alt: 'Tatuagem preto e cinza - Bruno Tattoo - Angra dos Reis'
    },     
    { 
      id: 10, 
      style: 'Portrait', 
      image: 'src/assets/thomas~2.jpg',
      alt: 'Tatuagem preto e portrait - Bruno Tattoo - Angra dos Reis'
    },  
    { 
      id: 11, 
      style: 'Preto e cinza', 
      image: 'src/assets/wallace.jpg',
      alt: 'Tatuagem preto e preto e cinza - Bruno Tattoo - Angra dos Reis'
    },        
  ]

  return (
    <section id="portfolio" className="py-20 bg-gray-50" role="region" aria-labelledby="portfolio-title">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 id="portfolio-title" className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nossa Arte em Destaque
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore nossa galeria de tatuagens únicas, cada uma contando uma história especial
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" role="list">
          {portfolioItems.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg cursor-pointer"
              role="listitem"
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.alt}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                  width="400"
                  height="400"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">{item.style}</h3>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="text-center mt-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-black text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-800 transition-colors"
            onClick={() => document.getElementById('contato').scrollIntoView({ behavior: 'smooth' })}
            aria-label="Solicitar orçamento personalizado para tatuagem"
          >
            Solicite um Orçamento
          </motion.button>
        </div>
      </div>
    </section>
  )
}

// Componente Sobre otimizado
const Sobre = () => {
  return (
    <section id="sobre" className="py-20 bg-white" role="region" aria-labelledby="sobre-title">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 id="sobre-title" className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Conheça o Artista por Trás da Tinta
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Com mais de 10 anos de experiência no mundo da tatuagem, Bruno combina técnica apurada 
              com criatividade única para transformar suas ideias em arte.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Mestrado em diversos estilos, desde realismo até minimalismo, cada tatuagem é 
              cuidadosamente planejada e executada com os mais altos padrões.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="bg-black text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3" aria-hidden="true">
                  <Award className="w-8 h-8" />
                </div>
                <h3 className="font-semibold text-gray-900">10+ Anos</h3>
                <p className="text-gray-600">de Experiência</p>
              </div>
              <div className="text-center">
                <div className="bg-black text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3" aria-hidden="true">
                  <Heart className="w-8 h-8" />
                </div>
                <h3 className="font-semibold text-gray-900">500+</h3>
                <p className="text-gray-600">Clientes Satisfeitos</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-lg overflow-hidden shadow-2xl">
              <img 
                src="src/assets/eu.jpg" 
                alt="Bruno - Tatuador profissional com mais de 10 anos de experiência em Angra dos Reis"
                className="w-full h-full object-cover"
                loading="lazy"
                width="600"
                height="600"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center space-x-2">
                <Palette className="w-6 h-6 text-black" aria-hidden="true" />
                <span className="font-semibold text-gray-900">Artista Certificado</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Componente Processo otimizado
const Processo = () => {
  const steps = [
    {
      icon: MessageCircle,
      title: 'Consulta',
      description: 'Conversamos sobre sua ideia e criamos o conceito perfeito'
    },
    {
      icon: Palette,
      title: 'Criação',
      description: 'Desenvolvemos o design personalizado da sua tatuagem'
    },
    {
      icon: Shield,
      title: 'Tatuagem',
      description: 'Executamos com técnica e segurança em ambiente esterilizado'
    },
    {
      icon: Heart,
      title: 'Cuidados',
      description: 'Orientamos sobre os cuidados pós-tatuagem para melhor cicatrização'
    }
  ]

  return (
    <section id="processo" className="py-20 bg-gray-50" role="region" aria-labelledby="processo-title">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 id="processo-title" className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Do Sonho à Realidade
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Nosso processo cuidadoso garante que sua tatuagem seja exatamente como você imaginou
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" role="list">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
              role="listitem"
            >
              <div className="bg-black text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" aria-hidden="true">
                <step.icon className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Componente FAQ otimizado
const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: 'Quanto tempo leva para fazer uma tatuagem?',
      answer: 'O tempo varia conforme o tamanho e complexidade. Tatuagens pequenas levam 1-2 horas, enquanto peças maiores podem precisar de múltiplas sessões.'
    },
    {
      question: 'Como devo me preparar para a sessão?',
      answer: 'Durma bem, alimente-se adequadamente, evite álcool 24h antes e use roupas confortáveis que permitam acesso à área a ser tatuada.'
    },
    {
      question: 'Qual o processo de cicatrização?',
      answer: 'A cicatrização leva cerca de 1-2 semanas. Fornecemos instruções detalhadas de cuidados pós-tatuagem para garantir a melhor cicatrização.'
    },
    {
      question: 'Vocês fazem orçamentos pelo whatsapp?',
      answer: 'Sim! Capesar do ideal ser uma conversa frente a frente, podemos fazer uma consulta via whatsapp.'
    }
  ]

  return (
    <section className="py-20 bg-white" role="region" aria-labelledby="faq-title">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 id="faq-title" className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Perguntas Frequentes
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border-b border-gray-200 last:border-b-0"
              itemScope
              itemType="https://schema.org/Question"
            >
              <button
                className="w-full py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4" itemProp="name">{faq.question}</h3>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" aria-hidden="true" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" aria-hidden="true" />
                )}
              </button>
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="pb-6"
                  id={`faq-answer-${index}`}
                  itemScope
                  itemType="https://schema.org/Answer"
                >
                  <p className="text-gray-600" itemProp="text">{faq.answer}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Componente Depoimentos otimizado
const Depoimentos = () => {
  const testimonials = [
    {
      name: 'Maria Silva',
      text: 'Experiência incrível! Bruno é um artista excepcional e o resultado ficou perfeito.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'João Santos',
      text: 'Profissionalismo e qualidade incomparáveis. Recomendo de olhos fechados!',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'Ana Costa',
      text: 'Ambiente limpo, seguro e acolhedor. Minha tatuagem ficou exatamente como eu queria.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face'
    }
  ]

  return (
    <section className="py-20 bg-gray-50" role="region" aria-labelledby="depoimentos-title">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 id="depoimentos-title" className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            O Que Nossos Clientes Dizem
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" role="list">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg"
              role="listitem"
              itemScope
              itemType="https://schema.org/Review"
            >
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={`Foto de ${testimonial.name}, cliente satisfeito do Bruno Tattoo`}
                  className="w-12 h-12 rounded-full mr-4"
                  loading="lazy"
                  width="48"
                  height="48"
                />
                <div>
                  <h3 className="font-semibold text-gray-900" itemProp="author">{testimonial.name}</h3>
                  <div className="flex" itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                    <meta itemProp="ratingValue" content={testimonial.rating} />
                    <meta itemProp="bestRating" content="5" />
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" aria-hidden="true" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic" itemProp="reviewBody">"{testimonial.text}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Componente Contato otimizado
const Contato = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    descricao: '',
    tamanho: '',
    local: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aqui você pode implementar o envio do formulário
    console.log('Formulário enviado:', formData)
    alert('Obrigado! Entraremos em contato em breve.')
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contato" className="py-20 bg-white" role="region" aria-labelledby="contato-title">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 id="contato-title" className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Transforme Sua Ideia em Tatuagem
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Entre em contato conosco e vamos criar juntos a tatuagem dos seus sonhos
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6" aria-label="Formulário de orçamento para tatuagem">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-2">Nome</label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    required
                    aria-required="true"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    aria-required="true"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-2">Telefone</label>
                <input
                  type="tel"
                  id="telefone"
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleChange}
                  required
                  aria-required="true"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="tamanho" className="block text-sm font-medium text-gray-700 mb-2">Tamanho Aproximado</label>
                  <select
                    id="tamanho"
                    name="tamanho"
                    value={formData.tamanho}
                    onChange={handleChange}
                    required
                    aria-required="true"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                  >
                    <option value="">Selecione</option>
                    <option value="pequena">Pequena (até 5cm)</option>
                    <option value="media">Média (5-15cm)</option>
                    <option value="grande">Grande (15cm+)</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="local" className="block text-sm font-medium text-gray-700 mb-2">Local do Corpo</label>
                  <input
                    type="text"
                    id="local"
                    name="local"
                    value={formData.local}
                    onChange={handleChange}
                    placeholder="Ex: braço, perna, costas..."
                    required
                    aria-required="true"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="descricao" className="block text-sm font-medium text-gray-700 mb-2">Descrição da Ideia</label>
                <textarea
                  id="descricao"
                  name="descricao"
                  value={formData.descricao}
                  onChange={handleChange}
                  rows={4}
                  required
                  aria-required="true"
                  placeholder="Descreva sua ideia de tatuagem..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                ></textarea>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-black text-white py-4 rounded-lg font-semibold text-lg hover:bg-gray-800 transition-colors"
                aria-label="Enviar solicitação de orçamento para tatuagem"
              >
                Solicitar Orçamento Agora
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div itemScope itemType="https://schema.org/LocalBusiness">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Informações de Contato</h3>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-black mr-4" aria-hidden="true" />
                  <span className="text-gray-700" itemProp="telephone">(11) 99999-9999</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-black mr-4" aria-hidden="true" />
                  <span className="text-gray-700" itemProp="email">contato@brunotattoo.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 text-black mr-4" aria-hidden="true" />
                  <span className="text-gray-700" itemProp="address">Rua das Artes, 123 - São Paulo, SP</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Horário de Funcionamento</h4>
              <div className="space-y-2 text-gray-700" itemScope itemType="https://schema.org/OpeningHoursSpecification">
                <div className="flex justify-between">
                  <span>Segunda - Sexta:</span>
                  <span itemProp="opens">9h</span> às <span itemProp="closes">18h</span>
                </div>
                <div className="flex justify-between">
                  <span>Sábado:</span>
                  <span>9h às 16h</span>
                </div>
                <div className="flex justify-between">
                  <span>Domingo:</span>
                  <span>Fechado</span>
                </div>
              </div>
            </div>

            <motion.a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
              aria-label="Entrar em contato via WhatsApp para orçamento de tatuagem"
            >
              <MessageCircle className="w-5 h-5 mr-2" aria-hidden="true" />
              Fale Conosco via WhatsApp
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Componente Footer otimizado
const Footer = () => {
  return (
    <footer className="bg-black text-white py-12" role="contentinfo">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Bruno Tattoo</h3>
            <p className="text-gray-400 mb-4">
              Transformando ideias em arte permanente com qualidade e segurança.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/brunotattoo" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Seguir Bruno Tattoo no Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a 
                href="https://facebook.com/brunotattoo" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Seguir Bruno Tattoo no Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <nav aria-label="Links do rodapé">
              <ul className="space-y-2">
                <li><a href="#portfolio" className="text-gray-400 hover:text-white transition-colors">Portfólio</a></li>
                <li><a href="#sobre" className="text-gray-400 hover:text-white transition-colors">Sobre</a></li>
                <li><a href="#processo" className="text-gray-400 hover:text-white transition-colors">Processo</a></li>
                <li><a href="#contato" className="text-gray-400 hover:text-white transition-colors">Contato</a></li>
              </ul>
            </nav>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <address className="space-y-2 text-gray-400 not-italic">
              <p>(11) 99999-9999</p>
              <p>contato@brunotattoo.com</p>
              <p>Rua das Artes, 123<br />São Paulo, SP</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Bruno Tattoo. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

// Componente Principal App otimizado
function App() {
  return (
    <div className="App">
      <SEOHead 
        title="Bruno Tattoo - Estúdio de Tatuagem em São Paulo | Arte na Pele"
        description="Bruno Tattoo - Estúdio de tatuagem especializado em diversos estilos em São Paulo. Mais de 10 anos de experiência, 500+ clientes satisfeitos. Agende sua consulta gratuita!"
        image="https://brunotattoo.com/og-image.jpg"
        url="https://brunotattoo.com/"
      />
      <Header />
      <HeroSection />
      <Portfolio />
      <Sobre />
      <Processo />
      <Depoimentos />
      <FAQ />
      <Contato />
      <Footer />
    </div>
  )
}

export default App

