import { motion } from "framer-motion"

const variants = {
    open: {
        transition: {
            staggerChildren: 0.1,
        },
    },
    closed: {
        transition: {
            staggerChildren: 0.1,
            staggerDirection: -1,
        },
    },
}

const itemVariants = {
    open: {
        y: 0,
        opacity: 1,
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            ease: "backIn",
            duration: 0.3,
        }
    },
}

const Links = () => {

    const items = [
        "Homepage",
        "Services",
        "Portfolio",
        "Contact",
        "About"
    ]

    return (<motion.div
    variants={variants}
    className="links">
        {items.map((item) => (
            <motion.a href={`#${item}`} key={item}
            variants={itemVariants}
            whileHover={{scale: 1.1}}
            whileTap={{scale:0.95}}
            >{item}</motion.a>
        ))}
    </motion.div>);
}

export default Links;