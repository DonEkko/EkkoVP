const $video =document.querySelector("#video")
    const $play =document.querySelector("#play")
    const $pause =document.querySelector("#pause")
    const $forward =document.querySelector("#forward")
    const $repeat =document.querySelector("#repeat")

    $play.addEventListener("click",handlePlay)
    $pause.addEventListener("click",handlePause)

    function handlePlay () {
        $video.play()
        $play.hidden = true
        $pause.hidden =false
        console.log ("le diste click a play")
    }
    
    function handlePause () {
        $video.pause()
        $play.hidden = false
        $pause.hidden = true
        console.log ("le diste click a pausa")
         }

        $forward.addEventListener ("click",handleForward)
        function handleForward() {
            $video.currentTime = $video.currentTime + 10
            console.log ("Adelante 10 segundos", $video.currentTime)
        }
        
        $repeat.addEventListener ("click",handleRepeat)
        function handleRepeat() {
            $video.currentTime = $video.currentTime - 246
            console.log ("Repetir cancion")
            }

         