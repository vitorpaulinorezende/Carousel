<h1>Carousel Plugin</h1>

<p>Simple Jquery Plugin for make a Image Carousel System</p>
<p>This plugin is fastfull and powerful...</p>
<p>And easy to use</p>

<h2>Basic Usage</h2>

<i>Full Example available in the examples directory</i>

<b>index.html:</b>

<code>
    
        <main class="container">
            <div class="slide-container">
                <span class="slide-hook slide-left-hook"></span>
                <section class="slide-content">
                    <img class="slide-img" src="koala.jpg" alt="">
                    <img class="slide-img" src="desert.jpg" alt="">
                    <img class="slide-img" src="koala.jpg" alt="">
                    <img class="slide-img" src="desert.jpg" alt="">
                </section>
                <span class="slide-hook slide-right-hook"></span>
            </div>
        </main>
        
        <script src="jquery.js"></script>
        <script src="carousel.js"></script>
        <script src="script.js"></script>
</code>

<b>script.js:</b>

<code>

       $('.slide-container').carousel('.slide-img', {
            left_trigger: '.slide-left-hook',
            right_trigger: '.slide-right-hook',
            time: 400
       })
   
</code>

<h3>HTML Code</h3>

<b>Lines 1 to 12 in html file:</b> The html structure
<p>The html structure is very personalizable</p>

<b>Lines 13 to 14 in html file:</b> Call the jquery file and the plugin file
<p>The scripts lines after is yours js files</p>

<h3>JS Code</h3>

<b>Lines 1 in js file:</b> The call the carousel function, the first param is the image identification
<p>The second param is the Config Object</p>

<h4>Config Object</h4>
<h5>The Config object is simple to configure</h5>
<p>The first field is the identification of the left trigger.</p>
<p>The second is the identification of the right trigger.</p>
<p>The third is the effect time.</p>

