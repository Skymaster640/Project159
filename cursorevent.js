AFRAME.registerComponent("cursor-listener",{
    schema:{
        selectedItemId:{default:"",type:"string"},
    },
    init:function(){
        this.handleMouseEnterEvents()
        this.handleMouseLeaveEvents()
    },
    update:function(){
        const fadeBackgroundE1 = document.querySelector("#fadeBackground")

        c = fadeBackgroundE1.children;
        if (c.length > 0){
            var i;
            for (i = 0; i <= c.length; i++){
                fadeBackgroundE1.removeChild(c[i]);
            }
        }else{
            this.handleMouseClickEvents()
        }
    },
    handleMouseEnterEvents:function(){
        this.el.addEventListener("mouseenter",()=>{
            const id = this.el.getAttribute("id");
            const postersId=[
                "supermancomic",
                "spidermancomic",
                "avengerscomic",
                "justiceleaguecomic"
            ]
            if(postersId.includes(id)){
                const postersContainer = document.querySelector("#posters-container")
                postersContainer.setAttribute("cursor-listener",{
                    selectedItemId:id,
                })
                this.el.setAttribute("material",{color:"#1565c0"})
            }
        })
    },

    handleMouseLeaveEvents:function(){
        this.el.addEventListener("mouseleave",()=>{
            const id = this.el.getAttribute("id");
            const postersId=[
                "supermancomic",
                "spidermancomic",
                "avengerscomic",
                "justiceleaguecomic"
            ]
            if(postersId.includes(id)){
                const postersContainer = document.querySelector("#posters-container")
                postersContainer.setAttribute("cursor-listener",{
                    selectedItemId:id,
                })
                this.el.setAttribute("material",{color:"black"})
            }
        })
    },
    handleMouseClickEvents:function(){
        this.el.addEventListener("click",()=>{
            const {selectedItemId} = this.data;

            const fadeBackgroundE1 = document.querySelector("#fadeBackground")
            const titleE1 = document.querySelector("#app-title")
            const cursorE1 = document.querySelector("#camera-cursor")

            if(selectedItemId){
                fadeBackgroundE1.setAttribute("visible",true)
                fadeBackgroundE1.setAttribute("info-banner",{
                    itemId:selectedItemId,
                })
                titleE1.setAttribute("visible",false)
                cursorE1.setAttribute("position",{x:0,y:0,z:-1})
                cursorE1.setAttribute("geometry",{
                    radiusInner:0.03,
                    radiusOuter:0.04,
                })
            }else{
                fadeBackgroundE1.setAttribute("visible",false)
                titleE1.setAttribute("visible",true);
                cursorE1.setAttribute("position",{x:0,y:0,z:-3})
                cursorE1.setAttribute("geometry",{
                    radiusInner:0.08,
                    radiusOuter:0.12
                })
            }
        })
    },
})