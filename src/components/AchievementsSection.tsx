import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Award, ChevronLeft, ChevronRight, Trophy } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface Achievement {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
  category: string;
}

const achievements: Achievement[] = [

  {
    id: 13,
    title: 'Top 1000 - SBI Youth Ideathon 2025',
    description: 'Selected among the Top 1000 teams out of 44,000+ participants across India for the SBI Youth Ideathon 2025. Represented our team with the slogan "Nayi Soch, Naya Bharat" at the Grand Finale held at the IIT Delhi campus.',
    image: 'https://media-hosting.imagekit.io/01c524387d6346c5/%F0%9F%94%ADGcamHero_20250405_151552_%E2%8C%9B%20IPHONE%2014%20PRO%20MAX%20BY%20GCAM%20HERO%20(AUTO)%20LMC8.4%20R13.jpg?Expires=1838743904&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=t20OydG7a6E8FIaQQkIueztgI3f11hCl1LobUoTuJ6yBwZWmLHFgqap9dWTTfI1coFi6tLRrM71zFtOmyfxRwaKiXfZtwlg5bkoBvOERw9LG2Req9JaPvvt4o1bdIALAk5VFDIqjVIsGwqnNWvGDcKyCkmB3Zy0zOqw0p3NHkYCFjAGdxaTFkRJygY068aQ4O-d9YGTqL4UWsLlH3YGm0DNKPpeiKgmvoYaTM6YIEJ0iiMr3ANflawjycr1ITMoqlmXGIYoATDPPKe-Q9CWfXG4~kiESKJqyPCuxhUFyc~RMdPEnOxrKVGex89ngXevO-2zSrpID6rN8P~evqhO4dg__',
    date: '2025',
    category: 'Innovation & Ideathons'
  },

  {
    id: 14,
    title: 'Google Cloud Arcade Champion',
    description: 'Achieved the Champion Milestone in the Google Cloud Arcade event. Received exclusive gifts and recognition from Google Cloud for outstanding performance and completing all tasks successfully.',
    image: 'https://media-hosting.imagekit.io/16f0d683df4f4b50/Screenshot_2025_0408_234944.jpg?Expires=1838744424&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=Cwo2S-mda8jGXj9-cog6Zgb8F9mK37DPwg2EfCI~ZX1Gyb-crBxwdSGa5vqFzg3rZk3o~t6xC-4cNUcv5Cgy5Adlut84hFFAs0i1BkKr0sDk5JALoJoLZsrLTSEwAdOSEFwJHcGDbjt6fuV3YtbMwDkklsD31E~3vMrhI3JRbZaq9kJLAJQPSzwypM-2S-6lrHnzQ70Crqdnicj65qOS1EcUmxqArAqoWPEgewYlAFyiN~GKMudvdlQNjn~HN-2P0yywRFpN85bL8EZavalxfRP1v5cAxEIw4cXLHxWmWGmzFu6jAs-tLBxoX3GGK0ojaaLM8u4mGoOmKr5I1oD63Q__',
    date: '2025',
    category: 'Cloud & Certifications'
  },
  

  {
    id: 12,
    title: 'Best Achiever Award - AIM Institute',
    description: 'Honored with the Best Achiever Award at AIM Institute by CEO Bhupendra Jogi Sir, recognizing consistent performance and dedication towards personal and professional growth.',
    image: 'https://media-hosting.imagekit.io/40bca98703514b73/jogisir.jpg?Expires=1838742665&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=RvuJ~ZwkvB561ex1KnZnAiiKYK2D3NzAh2qhlKm4Jz9ZFKxslgpU-woYyZAKLEZPDFExd6TEsbge1Sfop5eTFz1Yexf4E8t7dI45But~2m7lz13ONMBTKnfoo9o9ztJgrxUuaSdy-BnwcNsIRjPLfx79WS2XZvd9AB271ApXEL4M0uz2GXI~Spza4B4GbUwHoEV3WmRyAMZLnpq9NhyG3Kox52WodoY~htFAFzA28JU11w0MKYHCmgtUrADxPCw5pA~XxMYpxBcVqifqq-8eqnIGpafYtWxK4ckSHQHaeuK~sBwoF~mJGkBSNXC7JdU76lOchF5~5NbJ4nk~EC3DdQ__',
    date: '2025',
    category: 'Awards'
  },

  {
    id: 2,
    title: 'Winner - MSINS Startup Innovation Challenge',
    description: 'Secured ₹1 Lakh prize at the Maharashtra State Innovation Society (MSINS) Startup Innovation Challenge for developing a tech-driven solution.',
    image: 'https://media-hosting.imagekit.io//721d0aaab6374e98/1%20lakh.jpg?Expires=1835437357&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=CfN~T4zH-RKgAyvGIGdsxWGsOEe~hD6DfvOQmsZPnV8LXrn-OizvX6G3SrkoYJTiyGXDm-Ma6qce8R~FIm0ximRVS5g2pCz8J7A2GPTno5cRbHp1lQjehGNUxGPWFW-SF~DoK-9YBys7vEw~mDGbyQDY6DFNohUI1Lzx0cm52mJd4ArVGOxR7Mg1Ef3jQS8zdSySmXGOxRID8ps8ruyTlnoJDucKUpUFFESPL8-HlxH2j13d1IYGyG2YP57oVofhkxmD1eTRhsrcUxYt-oPup9iK5gwGJVsFs21MV06wFcOPvxb4j6J2bRakiaaUVZN~SRFk~O8DYwfYBl4TF1toDg__',
    date: '2023',
    category: 'Startup'
  },

  {
    id: 1,
    title: 'Reliance Foundation Scholar',
    description: 'Awarded the prestigious Reliance Foundation Scholarship for academic excellence and contributions to technology and innovation.',
    image: 'https://media-hosting.imagekit.io//eee54aa36d2043cc/1693105788638.jpg?Expires=1835437357&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=mA0miFDqezdKo-Rk4h6-gAWa0zHTdgMzS8K5Rv2LK5C1AA67pV8p89xZrwGhPeyQpWzMWtls7jrP1l4W5MrjTG3dpXm-kfe~JZZYk3ZTH95R87AnFlYwAP9GaSQuFaSuoCmqhFY30EAJl3L4qJjbhfZ8rRSNWO1bi9Y2uG~fHC5CqpE0MpEo0hWKE2c3DXgM-5iGL5E4wNHKG1zBCaPNr3~PrNAla4e3VFVfwyfDp0AWePh-N1bw1CwA~AF0lsonX8mlrboshkpa-9bkl~gP4lfjq7SwcZ0ZCFjL2WDui9VLCcNRnByIFrehPECWT~I2gSsckh-wP8zqiALdWNZYBA__',
    date: '2022',
    category: 'Scholarship'
  },

  {
    id: 3,
    title: 'Top 15 - National Hackathon (Pune)',
    description: 'Achieved a Top 15 rank in a national-level hackathon in Pune, showcasing innovative problem-solving skills in software development.',
    image: 'https://media-hosting.imagekit.io//78f4c62646d14c12/hackethong%202.jpg?Expires=1835437818&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=o1ObqMEkNSoQ6QauMlJWRol7x7ME2PQ6J9fNLA41w5rIwm8dR~MdtXqVEDIAgrylMASP8WvEP7KssBdQuQ2c5Ka92b1RMX5H7j3kKrd-kSz0ymDncGtcmSRGQBfKKbuuOR-QfFZtExp13CeZiZ44t1D2QENIHznBQer3~BBU3zJUvl9ZIkBihlQxl9NY8P~qHQRwGEopJZjgv-SZ9cuHMHBElkG1eCVVtyzgzGqZ36sX6yf~MuHrFqhdZlq-6c1QjEVYwQK4aTAriQIy8aJ7vx25FEKGYLoEC8fVGG~gEA~XR--upVXc2zfOR9TJKGl5SoZhxGA13Oyix1qO9xr2VQ__',
    date: '2023',
    category: 'Hackathon'
  },
  {
    id: 4,
    title: 'Selected for TiE Global Summit 2024',
    description: 'Chosen among the Top 300 students from the Futurepreneur Course to attend the TiE Global Summit 2024 at Bangalore International Exhibition Center (BIEC).',
    image: 'https://media-hosting.imagekit.io//f93040e3c6e44591/tie.jpg?Expires=1835437357&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=aP57mdLpI6GJH-9qZ-x40TnJT5qSbChq6oyncEJDhezsod2ELkZABmPZPKnzlAUEDPzfPCv7zU~fS1evR2fzhJkvtwZbiqPWYPaPNs8VK-n7npdYzK7eq8MUDRT~h7oW-r~sEdfKgG7BnvlmB83r7xabyOwu9f4Rm4xeThgoXE6iGKHcLcGwWz5MU2sVEbA6OwRmjoBicQ61kU-dXe~YN4-vqVZ07~zkl79EOpPNJkOjwx~RJPcRtV1ZQagRfbz2zppJGYHpVgIk1uZ8glgp5za0H4xRij5RGmQoi9bS0xOXBk4pIW7qH1exxc58diLtcl-JEjPiELjCLcrypwDKeA__',
    date: '2024',
    category: 'Entrepreneurship'
  },

  {
    id: 10,
    title: 'Selected for Startup Mahakumbh 2024',
    description: 'Sponsored by the Government of Maharashtra to attend Startup Mahakumbh in New Delhi, gaining exposure to India’s top entrepreneurial ecosystem.',
    image: 'https://media-hosting.imagekit.io//8dfc8cc2fa0e4eaa/startup.jpg?Expires=1835437357&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=JwnLsRY0GdywQJseLY0Socc3CgMEOwEo9msGpU6MgHidiz-6uND7stmzaxH-~z8lcyEijTFhM6eFOtqr1FTI7erHsVWzaU3oakk5ORPpWV0Z7QjyAwbIRNLZaAPqxGyfHU~wxUXFPT5hqiwxEYU-36gpyjI~aYA4cP9DJu5nMSSbEL45sG~VoraB8ExPrE0Em9MjFiZRAIo3TtyvIgnq-LX9qUYsiXFBUCLDHz82NT50lAfbfTjHFC6dc0dEc2o8SztoJvmgaRN08d0y11HBFfG7Hix8qNlUbqi6puD06XBP493YF6g5nxGGkoXsuDU0mVjfH3jbz1MbkqSZv-qqMw__',
    date: '2024',
    category: 'Entrepreneurship'
  },

  {
    id: 11,
    title: 'Attended Startup Mahakumbh 2.0 (2025)',
    description: 'Represented at Startup Mahakumbh 2.0 held at Bharat Mandapam, New Delhi from April 3rd to 5th, 2025. Gained exposure to India’s top entrepreneurial ecosystem and innovations.',
    image: 'https://media-hosting.imagekit.io/e4137885499e4f50/startupmaha.jpg?Expires=1838742269&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=Z9nvz8lsanQZ4xH8y0i6Nx6IzJx41pMtusQ9zrggEcN-szgaD~HYTaL2BSetGOeXRzd5rh9kAbM9DsO4xwnDh7flZ-prFm-sfD~eO92~SQM1LjwLI36pJkXBFX-YTgVCCQpCXJRmugz6VQagNxWvo98xKsl4Is07TO9tNW~~YYC-6CxO3A4Nf6xx9KwZi2j-fIjcgZOwhXsyst8gZQuQzBjYxlLCOg6qxhIStaQS84vaGW3Fny0bOlCoFVBEGLhhwncepg0F7y2j6nCthqVIRhsWhDURmme8QY64FfJQFByAGvJas0qBEqvliFnAHFbK10HM6lAFMSopTDRrRKJh6g__',
    date: '2025',
    category: 'Entrepreneurship'
  },  


  {
    id: 5,
    title: 'Google Cloud Gen AI Quiz Winner',
    description: 'Secured a top 5 rank in the Google Cloud Gen AI Quiz, demonstrating expertise in cloud computing and generative AI technologies.',
    image: 'https://media-hosting.imagekit.io//71346291e1f24be7/quiz.png?Expires=1835437357&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=FL7L-gdfuQZ35AuFxM-5jL3ke9SDEHQTsuoM0HPMa607MmO4y9ODQb14nnrWN6rbTFWIjyl1ovoOmyNBfbnQRfnozN9NFM3PkA6-Xne7qPh-z6AMOSfP0jmTEfDS1OCqHRVcxEQDqBZvhkaLpBz~RrPXpTaPM~zrU6ftOJsScJ15KQmcEKBcSv7NisfPT0YNwsKf8MuRhPxECRTFCyKzVvIzaNci20VEwksYeMx0~5rNgEzWYv0VXxzt7iiavzzOfmjh5u81kp-gUdNffcHCiMhwOlsLizZnzC7KeImQytBwfjIQpdz2w1J3zbDOH46~km54qtrvIJqdcV0I4EMCRA__',
    date: '2024',
    category: 'Certification'
  },
  {
    id: 6,
    title: 'Volunteer - ISRO Bharatiya Antariksh Hackathon 2024',
    description: 'Selected as a volunteer for the ISRO Bharatiya Antariksh Hackathon, contributing to space-tech innovation and mentorship.',
    image: 'https://media-hosting.imagekit.io//dd3d68eab1f94bcf/isro%201.jpg?Expires=1835437357&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=zg63oMGQ2OeAicHPeyJKRhB9mh9xZr8Z1id2LJuzm6SLrXeFZ5P7tK43S1kuINYYPnr8qmBuC705IPkkGZf6t9HIk3DFp7He1WZD9hDrCH96O12tETn5i7AS1jJx991NLoGwl7mNCwr29prll~r3uCKvpY0SQXnPBhuuDhecul1~CMdWxVjC2ALoYXgicDVKoRMuw88QukzireHvAXwe8Z9t0lIkPR2aOk91G3zdG55R2Ey~8ZtGCN8oAIJUZrn~KDOj~4STXG1hFxtOcq~gLrt9gVbnSwenCxv3S0xusQ3pqsO4eGlTtrYDtoX2chjVwKkriHKpH25dSusdvzL-Wg__',
    date: '2024',
    category: 'Hackathon'
  },
  {
    id: 7,
    title: 'Best Modal Presentation Award',
    description: 'Awarded for outstanding performance in a model presentation competition at Smt. Maherbano College in 2023.',
    image: 'https://media-hosting.imagekit.io//4142e407511c49fc/project.jpg?Expires=1835437357&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=p9KKQ6OUCMXNop16tmbmPCsNpjieunThRxqhGt3PONY0V3l8r1TtqZgRePZKHli3ns3CIY9~~jhAZ46pBtKfzDi4Fogrv602We-s1-nOozzpspu-344tpul10n2MjURZLvqIJ6-Y7YRECs1j69W8x7CpoaX7wOGu6dZRmvXUIFjh2496h~-u6wY9RChGqStrQztk~5ZLRWOxaRbs6DtVDJGuBmU3e6a4RFhqDpFMkmw6zCEhDUiiCQ0Yl4S6ZzL5WKydWjq2TlbEO1rbr8oaTlZYd9p7-tSPpplxu7cJ5i2v29i17lyA20SjAqG-nU1ICK~u3LPyv25GaeHfg797BA__',
    date: '2024',
    category: 'Competition'
  },
  {
    id: 8,
    title: 'Social Media Contest Winner - Google Cloud Community Day Pune',
    description: 'Won the social media contest at Google Cloud Community Day Pune 2024 for engagement and contributions to cloud computing awareness.',
    image: 'https://media-hosting.imagekit.io//b4abd7c9d10d48b2/pune.jpg?Expires=1835437357&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=R0v~LjapfZFEQmhAmfn7FKNXIjWOk9PYWnDBmdfFKoz4HiDEluGuZeWvlkjKrvVh~limtK5hVt~16oe5h6ARdKFSPaj0FCDcbpBV-eQmgxawsggDOt4bQb2u8d9-3MMIwV91-dsf4MGftKdkbvDeiG66oQLdQK3cjhECqwANqTUbxA8AiLco~qH0S47e5CbabUF8HPptEZh~veUClowKoo96v2KQAzhyTWGGW7gQ6JwpPh1NVgENjUUVwZY~~vBfv4iKfGeDNPt2wTsL68N6tVY2oDzG2zibNPOoRKCxivMnOeCbQSa4PlnmdeX0zo0WQm2dx7VqNdcC4dqg6JLwug__',
    date: '2024',
    category: 'Community'
  },

  

  {
    id: 9,
    title: 'DevFest Pune 2024 Ticket Giveaway Winner',
    description: 'Selected as a lucky winner for the DevFest Pune 2024 ticket giveaway, gaining an opportunity to attend one of the biggest developer conferences.',
    image: 'https://media-hosting.imagekit.io//791184f018914ff5/devfest.jpg?Expires=1835437357&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=C9JZis36IpBhPMns0y-4WyRaCYACyiSHQWWsGd2PmmS-OjHBKA11tnSaWn49hNpgdfTS6RqWu8fmJmeuiBAoQDDg4J00DswTS-XGdRJYKotWxIzAQu5BMfRPXKD1lwnJT~lRutGjZvpyzBgWXu2DbL7QhYPRc11WIGv-I3x3bcU-pgGSLLl9WRf2gXATMbmAN-sr3Bt3pYDN9W3QpJBkl3052uxnDOpVGq-cb0dWCEtkghHFOsBIy7vvOGgF~~rilyvF-t6jsWAU2WsJWlOASNbswFXWf~L9ggfozq6L6Wu8jN393JWHpcNXx-NVBlVBEo07TGTzgRB6QKii67xfng__',
    date: '2024',
    category: 'Event'
  }
];

const AchievementsSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const swiperRef = useRef<any>(null);

  return (
    <section id="achievements" ref={ref} className="py-20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            My <span className="gradient-text">Achievements</span>
          </h2>
          <p className="section-subtitle">
            Recognitions, awards, and milestones that highlight my journey and expertise in the tech industry.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            className="pb-12"
          >
            {achievements.map((achievement) => (
              <SwiperSlide key={achievement.id}>
                <div className="card h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={achievement.image}
                      alt={achievement.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-primary-500 text-white text-xs font-bold px-2 py-1 rounded">
                      {achievement.category}
                    </div>
                  </div>
                  
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-start mb-4">
                      <div className="p-2 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 mr-3">
                        {achievement.category === 'Hackathon' ? (
                          <Trophy size={20} />
                        ) : (
                          <Award size={20} />
                        )}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{achievement.title}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{achievement.date}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 dark:text-gray-300 flex-grow">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Custom navigation buttons */}
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="absolute top-1/2 left-0 z-10 transform -translate-y-1/2 -translate-x-1/2 bg-white dark:bg-dark-200 rounded-full p-3 shadow-lg text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-dark-300 transition-colors duration-300 hidden md:block"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="absolute top-1/2 right-0 z-10 transform -translate-y-1/2 translate-x-1/2 bg-white dark:bg-dark-200 rounded-full p-3 shadow-lg text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-dark-300 transition-colors duration-300 hidden md:block"
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSection;