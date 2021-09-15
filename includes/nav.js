var path = window.location.pathname;
var page = path.split("/").pop();


if (page == "about.html"){
    document.write(`

    <nav class="navbar navbar-expand-sm bg-dark sticky-top colorline">
    <ul class="navbar-nav">
        <li class="navbar-item">
            <a href="home.html" class="navbar-brand navbar-fixed" style="font-family: 'Pacifico';">Veljko</a>
        </li>
        <li class="navbar-item">
            <a href="home.html" class="nav-link">Home</a>
        </li>
        <li class="navbar-item dropdown">
            <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown" id="navbardrop">Projects</a>
            <div class="dropdown-menu">
                <a href="projects/web.html" class="dropdown-item projects">Website</a>
                <div class="dropdown-divider"></div>
                <a href="projects/asp.html" class="dropdown-item projects">ASP Core</a>
                <a href="projects/csharp.html" class="dropdown-item projects">C# Learning</a>
                <a href="projects/javascript.html" class="dropdown-item projects">Javascript</a>
                <a href="projects/cpp.html" class="dropdown-item projects">C++</a>
                <a href="projects/php.html" class="dropdown-item projects">PHP</a>
                <a href="projects/xml.html" class="dropdown-item projects">XML</a>
                <div class="dropdown-divider"></div>
                <a href="projects/angular.html" class="dropdown-item projects">Angular</a>
                <a href="projects/jquery.html" class="dropdown-item projects">Jquery</a>
                <a href="projects/react.html" class="dropdown-item projects">React</a>
                <a href="projects/blazor.html" class="dropdown-item projects">Blazor</a>
            </div>
        </li>
        <li class="navbar-item">
            <a href="about.html" class="nav-link active">About</a>
        </li>
    </ul>
    </nav>
    
    `);
}
else if (page == "project.html"){
    document.write(`

    <nav class="navbar navbar-expand-sm bg-dark sticky-top colorline">
    <ul class="navbar-nav">
        <li class="navbar-item">
            <a href="home.html" class="navbar-brand navbar-fixed" style="font-family: 'Pacifico';">Veljko</a>
        </li>
        <li class="navbar-item">
            <a href="home.html" class="nav-link">Home</a>
        </li>
        <li class="navbar-item dropdown">
            <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown" id="navbardrop">Projects</a>
            <div class="dropdown-menu">
                <a href="projects/web.html" class="dropdown-item projects">Website</a>
                <div class="dropdown-divider"></div>
                <a href="projects/asp.html" class="dropdown-item projects">ASP Core</a>
                <a href="projects/csharp.html" class="dropdown-item projects">C# Learning</a>
                <a href="projects/javascript.html" class="dropdown-item projects">Javascript</a>
                <a href="projects/cpp.html" class="dropdown-item projects">C++</a>
                <a href="projects/php.html" class="dropdown-item projects">PHP</a>
                <a href="projects/xml.html" class="dropdown-item projects">XML</a>
                <div class="dropdown-divider"></div>
                <a href="projects/angular.html" class="dropdown-item projects">Angular</a>
                <a href="projects/jquery.html" class="dropdown-item projects">Jquery</a>
                <a href="projects/react.html" class="dropdown-item projects">React</a>
                <a href="projects/blazor.html" class="dropdown-item projects">Blazor</a>
            </div>
        </li>
        <li class="navbar-item">
            <a href="about.html" class="nav-link">About</a>
        </li>
    </ul>
    </nav>
    
    `);
}
else if (page == "home.html"){
    document.write(`
 
    <nav class="navbar navbar-expand-sm bg-dark sticky-top colorline">
    <ul class="navbar-nav">
        <li class="navbar-item">
            <a href="home.html" class="navbar-brand navbar-fixed" style="font-family: 'Pacifico';">Veljko</a>
        </li>
        <li class="navbar-item">
            <a href="home.html" class="nav-link active">Home</a>
        </li>
        <li class="navbar-item dropdown">
            <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown" id="navbardrop">Projects</a>
            <div class="dropdown-menu">
                <a href="projects/web.html" class="dropdown-item projects">Website</a>
                <div class="dropdown-divider"></div>
                <a href="projects/asp.html" class="dropdown-item projects">ASP Core</a>
                <a href="projects/csharp.html" class="dropdown-item projects">C# Learning</a>
                <a href="projects/javascript.html" class="dropdown-item projects">Javascript</a>
                <a href="projects/cpp.html" class="dropdown-item projects">C++</a>
                <a href="projects/php.html" class="dropdown-item projects">PHP</a>
                <a href="projects/xml.html" class="dropdown-item projects">XML</a>
                <div class="dropdown-divider"></div>
                <a href="projects/angular.html" class="dropdown-item projects">Angular</a>
                <a href="projects/jquery.html" class="dropdown-item projects">Jquery</a>
                <a href="projects/react.html" class="dropdown-item projects">React</a>
                <a href="projects/blazor.html" class="dropdown-item projects">Blazor</a>
            </div>
        </li>
        <li class="navbar-item">
            <a href="about.html" class="nav-link">About</a>
        </li>
    </ul>
    </nav>
    
    `);
}
else if (page == "bootstrap.html"){
        document.write(`
        
        <nav class="navbar navbar-expand-sm bg-dark sticky-top colorline topnav" id="myTopnav">
        <ul class="navbar-nav">
            <li class="navbar-item">
                <a href="../home.html" class="navbar-brand navbar-fixed" style="font-family: 'Pacifico';">Veljko</a>
            </li>
            <li class="navbar-item">
                <a href="../home.html" class="nav-link">Home</a>
            </li>
            <li class="navbar-item dropdown">
                <a href="#" class="nav-link dropdown-toggle active" data-toggle="dropdown" id="navbardrop">Projects</a>
                <div class="dropdown-menu">
                    <a href="../projects/web.html" class="dropdown-item projects">Website</a>
                    <div class="dropdown-divider"></div>
                    <a href="../projects/asp.html" class="dropdown-item projects">ASP Core</a>
                    <a href="../projects/csharp.html" class="dropdown-item projects">C# Learning</a>
                    <a href="../projects/javascript.html" class="dropdown-item projects">Javascript</a>
                    <a href="../projects/cpp.html" class="dropdown-item projects">C++</a>
                    <a href="../projects/php.html" class="dropdown-item projects">PHP</a>
                    <a href="../projects/xml.html" class="dropdown-item projects">XML</a>
                    <div class="dropdown-divider"></div>
                    <a href="../projects/angular.html" class="dropdown-item projects">Angular</a>
                    <a href="../projects/jquery.html" class="dropdown-item projects">Jquery</a>
                    <a href="../projects/react.html" class="dropdown-item projects">React</a>
                    <a href="../projects/blazor.html" class="dropdown-item projects">Blazor</a>
                </div>
            </li>
            <li class="navbar-item">
                <a href="../about.html" class="nav-link">About</a>
            </li>
        </ul>
        </nav>
        
        `);}
else {
document.write(`

<nav class="navbar navbar-expand-sm bg-dark sticky-top colorline">
<ul class="navbar-nav">
    <li class="navbar-item">
        <a href="../home.html" class="navbar-brand navbar-fixed" style="font-family: 'Pacifico';">Veljko</a>
    </li>
    <li class="navbar-item">
        <a href="../home.html" class="nav-link">Home</a>
    </li>
    <li class="navbar-item dropdown">
        <a href="#" class="nav-link dropdown-toggle active" data-toggle="dropdown" id="navbardrop">Projects</a>
        <div class="dropdown-menu">
            <a href="web.html" class="dropdown-item projects">Website</a>
            <div class="dropdown-divider"></div>
            <a href="asp.html" class="dropdown-item projects">ASP Core</a>
            <a href="csharp.html" class="dropdown-item projects">C# Learning</a>
            <a href="javascript.html" class="dropdown-item projects">Javascript</a>
            <a href="cpp.html" class="dropdown-item projects">C++</a>
            <a href="php.html" class="dropdown-item projects">PHP</a>
            <a href="xml.html" class="dropdown-item projects">XML</a>
            <div class="dropdown-divider"></div>
            <a href="angular.html" class="dropdown-item projects">Angular</a>
            <a href="jquery.html" class="dropdown-item projects">Jquery</a>
            <a href="react.html" class="dropdown-item projects">React</a>
            <a href="blazor.html" class="dropdown-item projects">Blazor</a>
        </div>
    </li>
    <li class="navbar-item">
        <a href="../about.html" class="nav-link">About</a>
    </li>
</ul>
</nav>

`);}


/* 

<style>     
    .icon {
        display: none;
    }
    @media screen and (max-width: 600px) {
        .topnav a:not(:first-child) {display: none;}
        .topnav a.icon {
          float: right;
          display: block;
          padding: 12px;
        }
        .navbar-item {display:none;}
      }
    </style>

    <nav class="navbar navbar-expand-sm bg-dark sticky-top colorline topnav" id="myTopnav">
<ul class="navbar-nav">
    <li class="navbar-brand">
        <a href="home.html" class="navbar-brand navbar-fixed" style="font-family: 'Pacifico';">Veljko</a>
    </li>
    <li class="navbar-item zafun">
        <a href="home.html" class="nav-link active">Home</a>
    </li>
    <li class="navbar-item dropdown zafun">
        <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown" id="navbardrop">Projects</a>
        <div class="dropdown-menu">
            <a href="projects/web.html" class="dropdown-item projects">Website</a>
            <a href="projects/asp.html" class="dropdown-item projects">ASP Core</a>
            <a href="projects/csharp.html" class="dropdown-item projects">C# Learning</a>
            <a href="projects/javascript.html" class="dropdown-item projects">Javascript</a>
            <a href="projects/cpp.html" class="dropdown-item projects">C++</a>
            <a href="projects/php.html" class="dropdown-item projects">PHP</a>
        </div>
    </li>
    <li class="navbar-item zafun">
        <a href="about.html" class="nav-link">About</a>
    </li>
    <a href="#" class="icon" onclick="if (document.getElementsByClassName('zafun').style.display == 'none'){
        document.getElementsByClassName('zafun').style.display = 'block';}
     else {document.getElementsByClassName('zafun').style.display = 'none';}
    }">
    <i class="fa fa-bars"></i>
    </a>
</ul>
</nav>
    
*/