import { motion } from 'motion/react';

function FadeInText({text, delay = 0.05}) {
    return(
        <motion.span 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ 
                visible: { transition: { staggerChildren: delay}, },
            }}>

            {text.split("").map((char, index) => (
                <motion.span
                    key={index}
                    variants={{
                            hidden: {
                                opacity: 0,
                                y: 10,
                            },
                            visible: {
                                opacity: 1,
                                y: 0,
                            },
                        }}
                        style={{
                            display: 'inline-block'
                        }}
                    >
                    {char === " " ? "\u00a0" : char} 
                </motion.span>
            ))}
        </motion.span>
    )
}

export default FadeInText;