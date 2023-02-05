export const SectionAnimation = {
    hidden:{
        scale:0,
        opacity:0
    },
    show: {opacity: 1,
        scale:1,
    transition:{staggerChildren: 0.5,when: "beforeChildren", duration:1, ease: "easeOut"}
    }
}
export const TextAnimation = {
    hidden:{
        x:-500,
        opacity:0,
    },
    show: {
        x:0,
        opacity:1,
    transition:{staggerChildren: 0.5,when: "beforeChildren",duration:1, ease: "easeOut"}
    }
}
export const PictureAnimation = {
    hidden:{
        x:500,
        opacity:0,
    },
    show: {
        x:0,
        opacity:1,
    transition:{duration:0.5, ease: "easeOut"}
    }
}
export const titleAnim = {
    hidden:{
        y:-300,
        opacity:0,
    },
    show: {
        y:0,
        opacity:1,
    transition:{duration:.5, ease: "easeOut"}
    }
}
export const ProjAnimation = {
    hidden:{scale:0},
    show:{
        scale: 1,
        transition: {staggerChildren: 0.5,when: "beforeChildren", ease: "easeOut", duration:0.5}
    },
    exit:{
        scale:0
    }
}
export const OtherSingleProjectAnim = {
    hidden:{
        x:-300,
        y:-300,
        opacity:0,
    },
    show:{
        x:0,
        y:0,
        opacity:1,
        transition: {staggerChildren: 0.5,when: "beforeChildren", ease: "easeOut", duration:0.2}
    },

}