import React from 'react';
import {motion} from 'framer-motion';

// 1 - Passando as props com parâmetros para o componente
const MotionReveal = ( {children, direction="left", delay=0, cascade=false, width="100%"} ) => {
    // 2 - Criando os parâmetros da direção
    const xValue = direction === "left" ? -100 : direction ===  "right" ?  100 : 0;
    const yValue = direction === "down" ? -100 : direction === "up" ? 100 : 0;

    // 3 - Declaração das variantes 
    const variants = {
        hidden: {
            opacity: 0,  // Estado inicial, começa em 0 (sumido)
            x: xValue,   // Deslocamento para os lados de acordo com o valor passado
            y: yValue // Deslocamento baixo/cima de acordo com o valor passado
        },
        visible: {
            opacity: 1, // Estado final, opacidade em 1 ficando visivel
            x: 0, // Volta para a posição original no eixo x (esq/dir)
            y: 0, // Volta para a posição original no eixo y (cima/baixo)
            transition: {  // Caminho da transição
                duration: 0.8, // Duração entre inicio e fim 
                delay: delay, // Tempo de espera antes de começar 
                ease: "easeOut", // Tipo de transição
                staggerChildren: cascade ? 0.2 : 0
            }
        },
    };

    const childVariants = {
        hidden: variants.hidden,
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    }

    variants.visible.transition.staggerChildren = cascade ? 0.2 : 0;
    // Se tiver efeito cascata o delay vai ser de .2s para os filhos

    if (cascade) {
        return (
            <motion.div
                variants={variants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                style={{ width: width, 
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px' 
                }}
            >
                {React.Children.map(children, (child) => (
                    <motion.div 
                        variants={childVariants} // Os filhos herdam o stagger do pai
                        style={{ width: '100%' }}
                    >
                        {child}
                    </motion.div>
                ))}
            </motion.div>
        )
    }

  return (
    <motion.div
        // 4 - Passando as variávies para o componente
        variants={variants} // Conecta ao objeto
        initial="hidden" // Conecta ao estado inicial
        whileInView="visible"  // Conecta ao estado final
        viewport={{ once: true, amount: 0.2}} // Só é visível quando 20% da tela aparecer, sem repetição
        style={{width: "100%"}} // Faz com que o componente ocupe toda a largura
        >
            {children}
    </motion.div>
  )
}

export default MotionReveal