#AYGallery#
Simplest javascript image gallery for any site
#How to use#
Just run function aYGallery with parameter array of your images for current gallery
```
<a href="javascript:var imagesArray = [(getSiteUrl()+'images/image1.jpg'),
					(getSiteUrl()+'images/image2.jpg'),
					(getSiteUrl()+'images/image3.jpg')];
			 aYGallery(imagesArray);">Open Gallery Link </a>
```
#How to install#
1. Add adamofsky-gallery-1.0.js file and images folder to your project/js folder (total 52kb).
2. Add to your meta tag <script type="text/javascript" src="js/adamofsky-gallery-1.0.js"></script>

#Required#
Required jquery library to be added to your project, you can download it from https://code.jquery.com/jquery/ and add to your project by same way.
1. Add jquery-.......js file to your project/js folder.
2. Add to your meta tag <script type="text/javascript" src="js/jquery-.......js"></script>

#Limitation#
No limitation, use how many images you want and any formats you want
(IF YOUR IMAGE IS TRANSPORENT IN THE CENTER YOU WILL NEED TO DISABLE PROGRESS CIRCLE IMAGE, JUST DELETE IT IN IMAGES/LOADER.GIF).

#Note#
If you working on your project on your computer hard disk you need to change return variable in function getSiteUrl() in adamofsky-gallery-1.0.js file.
From 'networkURL' to 'parsedURL', and before you uploading your project to the server change it back to 'networkURL'.

#Enjoy#
