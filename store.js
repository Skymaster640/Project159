AFRAME.registerComponent("comics-posters",{
    init:function(){
        this.comicscontainer = this.el
        this.createPoster()
    },
    createPoster:function(){

        const thumbnailref = [
            {
                id: "avengerscomic",
                title: "TheAvengers",
                url:"./assets/avengerscomic.jpg"
            },
            {
                id: "spidermancomic",
                title: "Spider-Man",
                url:"./assets/spidermancomic.jpg"
            },
            {
                id: "justiceleaguecomic",
                title: "Justice League",
                url:"./assets/justiceleaguecomic.jpg"
            },
            {
                id: "supermancomic",
                title: "Superman",
                url:"./assets/supermancomic.jpg"
            },
        ]
        var previousXposition = -12.5
        for(var item of thumbnailref){
            const posX = previousXposition + 5
            const posY = 3
            const posZ = -10
            const position = {x:posX,y:posY,z:posZ}
            previousXposition = posX
            const bordere1 = this.createBorder(position,item.id)
            const thumbnail = this.createThumbnail(item)
            bordere1.appendChild(thumbnail)
            this.comicscontainer.appendChild(bordere1)
        }

    },
    createBorder:function(position,id){
        const entitye1 = document.createElement("a-entity")
        entitye1.setAttribute("id",id)
        entitye1.setAttribute("visible",true)
        entitye1.setAttribute("geometry",{
            primitive:"plane",
            width:3,
            height:5.5
        })
        entitye1.setAttribute("position",position)
        entitye1.setAttribute("material",{
            color:"black",
            opacity:0.2,
        })

        entitye1.setAttribute("cursor-listener", {});
        return entitye1
    },
    createThumbnail:function(item){
        const entitye1 = document.createElement("a-entity")
        entitye1.setAttribute("visible",true)
        entitye1.setAttribute("geometry",{
            primitive:"plane",
            width:2.5,
            height:5
        })
         entitye1.setAttribute("material",{
            src:item.url
         })
         return entitye1
    },
})