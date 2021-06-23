import { FC } from 'react'
import Image from 'next/image'
import {
  SeccionClientes,
  SectionTitle,
  ClientsContainer,
  ClientCard,
} from './Clientes.style'

const Clientes: FC = () => {
  return (
    <SeccionClientes>
      <SectionTitle>Nuestros clientes</SectionTitle>
      <ClientsContainer>
        <ClientCard>
          <Image
            src="/assets/home/clientes/ginzabarra1.png"
            width={139}
            height={50}
          ></Image>
        </ClientCard>
        <ClientCard>
          <Image
            src="/assets/home/clientes/deleiteshop1.png"
            width={122}
            height={50}
          ></Image>
        </ClientCard>
        <ClientCard>
          <Image
            src="/assets/home/clientes/carajillo1.png"
            width={74}
            height={74}
          ></Image>
        </ClientCard>
        <ClientCard>
          <Image
            src="/assets/home/clientes/midastech1.png"
            width={83}
            height={83}
          ></Image>
        </ClientCard>
        <ClientCard>
          <Image
            src="/assets/home/clientes/solufi1.png"
            width={136}
            height={67}
          ></Image>
        </ClientCard>
        <ClientCard>
          <Image
            src="/assets/home/clientes/sanborns-logo1.png"
            width={142}
            height={77}
          ></Image>
        </ClientCard>
        <ClientCard>
          <Image
            src="/assets/home/clientes/siclo1.png"
            width={190}
            height={50}
          ></Image>
        </ClientCard>
      </ClientsContainer>
    </SeccionClientes>
  )
}

export default Clientes
