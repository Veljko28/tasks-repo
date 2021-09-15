var path = window.location.pathname;
var page = path.split("/").pop();

if (page != "about.html" && page != "home.html" && page != "project.html"){
document.write(`

<footer class="page-footer font-small bg-dark pt-4">

    <div class="container-fluid text-center text-md-left">
  
      <div class="row">
  
        <div class="col-md-6 mt-md-0 mt-3">
  
          <h5 class="text-uppercase">Fun Fact:</h5>
          <p>This website was created as a joke project</p>
  
        </div>
  
        <hr class="clearfix w-100 d-md-none pb-3">
  
        <div class="col-md-3 mb-md-0 mb-3">
        </div>
        <div class=" col-md-offset-3 col-md-3 mb-md-0 mb-3">
  
        <table>
        <tr>
          <td>
            <a href="asp.html" class="text-white pl-3">ASP CORE</a>
          </td>
          <td>
            <a href="csharp.html" class="text-white pl-3">C#</a>
          </td>
        </tr>

        <tr>
          <td>
          <a href="javascript.html" class="text-white pl-3">JavaScript</a>
          </td>
          <td>
          <a href="cpp.html" class="text-white pl-3">C++</a>
          </td>
        </tr>
        
        <tr>
          <td>
            <a href="../home.html" class="text-white pl-3">This Website</a>
          </td>
          <td>
            <a href="php.html" class="text-white pl-3">PHP</a>
          </td>
        </tr>

        <tr>
          <td>
            <a href="angular.html" class="text-white pl-3">Angluar</a>
          </td>
          <td>
            <a href="jquery.html" class="text-white pl-3">Jquery</a>
          </td>
        </tr>
        </table>
        <br>
        </div>
      </div>
    </div>
    <div class="footer-copyright text-center py-3" style="background-color: #252a2e;">© 2020 Copyright:
      <a href="../home.html" class="copyright"> Veljko</a>
    </div>
  </footer>

`);}
else {
  document.write(`

<footer class="page-footer font-small bg-dark pt-4">

    <div class="container-fluid text-center text-md-left">
  
      <div class="row">
  
        <div class="col-md-6 mt-md-0 mt-3">
  
          <h5 class="text-uppercase">Fun Fact:</h5>
          <p>This website was created as a joke project</p>
  
        </div>
  
        <hr class="clearfix w-100 d-md-none pb-3">
  
        <div class="col-md-3 mb-md-0 mb-3">
        </div>
        <div class=" col-md-offset-3 col-md-3 mb-md-0 mb-3">
  
          <table>
          <tr>
            <td>
              <a href="projects/asp.html" class="text-white pl-3">ASP CORE</a>
            </td>
            <td>
              <a href="projects/csharp.html" class="text-white pl-3">C#</a>
            </td>
          </tr>

          <tr>
            <td>
            <a href="projects/javascript.html" class="text-white pl-3">JavaScript</a>
            </td>
            <td>
            <a href="projects/cpp.html" class="text-white pl-3">C++</a>
            </td>
          </tr>
          
          <tr>
            <td>
              <a href="home.html" class="text-white pl-3">This Website</a>
            </td>
            <td>
              <a href="projects/php.html" class="text-white pl-3">PHP</a>
            </td>
          </tr>

          <tr>
          <td>
            <a href="projects/angular.html" class="text-white pl-3">Angluar</a>
          </td>
          <td>
            <a href="projects/jquery.html" class="text-white pl-3">Jquery</a>
          </td>
        </tr>

          </table>
          <br>
        </div>
      </div>
    </div>
    <div class="footer-copyright text-center py-3" style="background-color: #252a2e;">© 2020 Copyright:
      <a href="home.html" class="copyright"> Veljko</a>
    </div>
  </footer>

`);
}