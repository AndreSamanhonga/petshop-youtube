import Image from "next/image";
import about1Img from '../../../public/bispoL.jpg'
import about2Img from '../../../public/padre.jpg'
import { Check, MapPin } from "lucide-react";
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";

export function About() {
  return (
    <section className="bg-[#FDF6ec] py-16">
      <div className="container px-4 mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <div className="relative" data-aos="fade-up-right" data-aos-delay="300">

            <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
              <Image
                src={about1Img}
                alt="Foto do cachorro"
                fill
                quality={100}
                className="object-cover hover:scale-110 duration-300"
                priority
              />
            </div>

            <div className="absolute w-40 h-40 right-4 -bottom-8 border-4 overflow-hidden rounded-lg border-white">
              <Image
                src={about2Img}
                alt="Foto do cachorro 2"
                fill
                quality={100}
                priority
              />
            </div>

          </div>

          <div className="space-y-6 mt-10" data-aos="fade-up-left" data-aos-delay="300">
            <h2 className="text-4xl font-bold">SOBRE</h2>

            <p>
            A Diocese de Luena desempenha um papel importante na vida religiosa e social da região, com 47 paróquias e centenas de capelas, orfanatos, escolas e obras sociais. Enfrenta desafios como a pobreza, problemas de infraestrutura e os efeitos da guerra civil angolana que devastou a região.
            </p>

            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <Check className="text-red-500" />
                A igreja do Sacalumbo Nossa Senhora das Vitórias do Luena fica no Bairro Zorró depois do bairro Passa Fome.
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-red-500" />
                Na Diocese de Luena, nossos padres são guias espirituais dedicados, comprometidos com o serviço à comunidade e à missão da Igreja
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-red-500" />
                Eles desempenham um papel essencial em nossas vidas, oferecendo apoio, orientação e liderança. Aqui estão as fotos dos nossos respectivos padres, que com amor e devoção, servem a nossa Diocese.”ed. Sit amet porttitor eget dolor morbi.
              </li>
            </ul>

            <div className="flex gap-2">
              <a
                target='_blank'
                href={`https://wa.me/556799998800?text=Olá vim pelo site e gostaria de mais informações`}
                className="bg-[#E84C3D] text-white flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md"
              >
                <WhatsappLogo className="w-5 h-5 text-white" />
                Contato via WhatsApp
              </a>

              <a
                href="#"
                className=" flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md"
              >
                <MapPin className="w-5 h-5 text-black" />
                Endereço da loja
              </a>
            </div>

          </div>

        </div>


      </div>
    </section>
  )
}