console.log(`%cWARNING!`, "color: red; font-size: 3rem; background-color: yellow; padding: 10px; margin: 5px;")
console.log("%cyou should not open this console if you don't know what you are doing", "font-size: 1.5rem")

const body = document.querySelector("body")
let activePalet = document.getElementById("active")

function commandHandler(command){
    command = command.toLowerCase()
    // if(command === "rm -rf /"){
    //     window.close();
    // }
    if(command === "neofetch"){
        body.innerHTML += `<h1 class="blue">Webbing My Life</h1>
        <p>Youtuber, Twitch Streamer and Occassional Gamer</p>`
    }
    else if(command === "help"){
        body.innerHTML += `
        <p><span class="blue">about</span> A bit of info about webbing my life</p>
        <p><span class="blue">clear</span> Clears the output</p>
        <p><span class="blue">help</span> Provides help for this website</p>
        <p><span class="blue">neofetch</span> Prints my intro</p>
        <p><span class="blue">socials</span> Prints my social media presences</p>
        `
    }
    else if(command === "clear"){
        body.innerHTML =  ``
    }
    else if(command === "about"){
        body.innerHTML +=  `<p>Webbing My Life is all about my online persona and presence... For getting my social links type in <span class="blue">socials</span> I am trying to be a twitch streamer and as well as a YouTube creator.</p> `
    }
    else if(command === "quit"){
        window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
    }
    else if(command === "socials"){
        body.innerHTML += `<p><a class="blue" target="_blank" href="https://twitch.tv/webbing_my_life">Twitch</a> is where I stream my web dev endeavours</p>
        
        <p><a target="_blank" class="blue" href="https://www.youtube.com/channel/UCph6w9Wz9Xeu7KRjZ66pIaw">YouTube</a> is where I make videos</p>

        <p><a target="_blank" class="blue" href="https://twitch.tv/webbing_my_life">Discord</a> is the place where I connect with the community</p>
        `
    }
    else{
        body.innerHTML += `<p class="red">Command not found!</p>`
    }
}

document.addEventListener("keydown", (e) => {
    if(e.key == "Enter"){
        let command_holder = document.getElementById("command")
        let command = command_holder.value;

        command_holder.remove();
        activePalet.innerHTML += `<p>${command}</p>`

        activePalet.id = ""
        command_holder.id = ""
        command_holder.blur();

        commandHandler(command);


        body.innerHTML += `
        <div class="command_prompt" id="active">
            <p>$</p>
            <input type="text" id="command" class="command"/>
        </div>
        `
        command_holder = document.getElementById("command")
        command_holder.focus()
        activePalet = document.getElementById("active")

    }
})

