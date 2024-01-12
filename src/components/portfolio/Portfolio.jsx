import "./portfolio.scss"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"
import { useRef } from "react"

const items = [
    {
        id: 1,
        title: "React Commerce",
        img: "https://images.pexels.com/photos/802024/pexels-photo-802024.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis finibus ex, a ornare mi. Donec at cursus leo, eget ultrices ex. Sed porttitor nisl in est gravida, in facilisis nibh porttitor. Sed purus turpis, commodo in metus a, tincidunt varius elit.",
    },
    {
        id: 2,
        title: "Next.js",
        img: "https://images.pexels.com/photos/772803/pexels-photo-772803.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis finibus ex, a ornare mi. Donec at cursus leo, eget ultrices ex. Sed porttitor nisl in est gravida, in facilisis nibh porttitor. Sed purus turpis, commodo in metus a, tincidunt varius elit.",
    },
    {
        id: 3,
        title: "Vanilla JS",
        img: "https://images.pexels.com/photos/4577796/pexels-photo-4577796.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis finibus ex, a ornare mi. Donec at cursus leo, eget ultrices ex. Sed porttitor nisl in est gravida, in facilisis nibh porttitor. Sed purus turpis, commodo in metus a, tincidunt varius elit.",
    },
    {
        id: 4,
        title: "Music App",
        img: "https://images.pexels.com/photos/1076885/pexels-photo-1076885.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis finibus ex, a ornare mi. Donec at cursus leo, eget ultrices ex. Sed porttitor nisl in est gravida, in facilisis nibh porttitor. Sed purus turpis, commodo in metus a, tincidunt varius elit.",
    },
]

const Single = ({ item }) => {

    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        // offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["-300px", "300px"]);

    return (
        <section>
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                        <img src={item.img} alt="" />
                    </div>
                    <motion.div className="textContainer" style={{ y }}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <button>See demo</button>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

function Portfolio() {

    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"],
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    });

    return (
        <div className="portfolio" ref={ref}>
            <div className="progress">
                <h1>Featured Works</h1>
                <motion.div style={{ scaleX }} className="progressBar"></motion.div>
            </div>
            {items.map(item => (
                <Single item={item} key={item.id} />
            ))}
        </div>
    )
}

export default Portfolio