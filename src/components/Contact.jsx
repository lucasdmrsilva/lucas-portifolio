import MotionReveal from './MotionReveal';

import sendImg from '../assets/img_icons/send-icon.svg';

import './Contact.css'

const Contact = () => {
  return (
    <section className="contact" id='contact'>
        <div className="container">
            <div className="header-section">
                <MotionReveal direction='down'>
                    <h1 className="title">Vamos Conversar?</h1>
                    <h2 className="subtitle">Entre em contato comigo!</h2>
                </MotionReveal>
            </div>
            <div className="info-contact">
                    <form>
                        <MotionReveal cascade={true} direction='up' delay={0.3}>
                        <input type="text" id='name' placeholder='Nome:' />
                        <input type="email" id='email' placeholder='E-mail:' />
                        <input type="text" id='subject' placeholder='Assunto:' />
                        <textarea name="" id="message" 
                        placeholder='Deixe sua mensagem aqui!'></textarea>
                        <div className="submit-form">
                            <input type="submit" value='Enviar' />
                            <img src={sendImg} 
                            alt="Formulário de contato Lucas Silva" />
                        </div>
                        </MotionReveal>
                    </form>
                <p>Carregando...</p>
                <p>Mensagem enviada com sucesso!</p>
                <p>Erro ao enviar mensagem. envie um e-mail para lucasmrsilva1198@gmail.com</p>
            </div>
        </div>
    </section>
  )
}

export default Contact