body{
    margin: 0;
    padding: 0;
    background-color: black;
}
.navbar {
    display: flex;
    background-color: green;
    height: 70px;
    justify-content: space-between;
}
#logo{
    padding: 10px;
    color: white;
    height: 50px;
}
.nav-items ul{
    display: flex;
    justify-content: center;
    gap: 20px;
    padding: 10px;
    padding-right: 70px;

}
.nav-items li{
    list-style: none;
}
.links{
    color: rgb(255, 255, 255);
    display: inline-block;
    text-decoration: none;
    padding: 5px;
    border-radius: 10px;
    transition: 0.2s
}
.links:hover{
    transform: scale(1.2);
    color: #504f4f;
    background: white;

}
.paragrafo1{
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: white;
}
<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ben 10</title>
    <link rel="stylesheet" href="home.css">
</head>

<body>
    <header>
        <nav class="navbar">
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6f/Ben_10_reboot_logo.png" alt="" id="logo">
        
            <div class="nav-items">
                <ul>
                    <li><a href="#" class="links">Início</a></li>
                    <li><a href="#" class="links">Galeria</a></li>
                    <li><a href="#" class="links">Sobre nós</a></li>
                    <li><a href="#" class="links">Contatos</a></li>
                </ul>
            </div>
        </nav>
    </header>
    <main>
        <section class="paragrafo1">
            <h1>Bem-vindo ao Mundo de Ben 10!</h1>
            <p>Prepare-se para embarcar em uma aventura intergaláctica ao lado de Ben Tennyson, o garoto que encontrou o Omnitrix, um incrível dispositivo alienígena capaz de transformá-lo em heróis de diferentes espécies e poderes!</p>
            <!-- <a href="#" class="btn">Saiba Mais</a> -->
        </section>
    </main>
</body>

</html>
