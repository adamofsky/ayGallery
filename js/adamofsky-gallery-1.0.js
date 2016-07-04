// JavaScript Document
/*  Copyright 2013 Alexey Adamovsky  (email: adamtech.mail@gmail.com site:www.adamofsky.com)*/
  	function ayGallery(imagesArray)
	{
		var div = document.createElement("div");
		div.style.position = 'fixed';
		div.style.top = '0';
		div.style.right = '0';
		div.style.width = '100%';
		div.style.height = '100%';
		div.style.background = 'black';
		div.style.opacity = 0.9;
		div.style.backgroundRepeat = 'no-repeat';
		div.style.backgroundPosition = 'center';
		div.style.backgroundImage = 'url('+getSiteUrl()+'/js/images/loader.gif)';


		var imageDiv = document.createElement('div');
		imageDiv.id = 'galleryImageDiv';
		imageDiv.style.position = 'fixed';
		imageDiv.style.width = 'auto';
		imageDiv.style.height = '90%';
		imageDiv.style.top = '5%';

		
		var image = document.createElement('img');
		image.id = 'galleryImage';
		image.src = imagesArray[0];
		image.style.height = '100%';
		image.onload = function(){	
			var currentWidth = (document.body.clientWidth);
			var currentHeigth = (document.body.clientHeigth);
			var imageHeight = this.height;
			var imageWidth = this.width;
			var center = (currentWidth-imageWidth);
			var center = (center/2);
			var myImage = document.getElementById('galleryImageDiv');
			myImage.style.left = center+"px";
		}
			
			
		var closeDiv = document.createElement('img');
		closeDiv.id = 'closeDivId';
		closeDiv.src = getSiteUrl()+'js/images/close-X.png';
		closeDiv.style.position = 'fixed';
		closeDiv.style.width = '152px';
		closeDiv.style.height = '136px';
		closeDiv.style.top = '0';
		closeDiv.style.right = '10%';
		
		var pointerR = document.createElement('img');
		pointerR.id = 'pointerRight';
		pointerR.src = getSiteUrl()+'js/images/pointer-right.png';
		pointerR.style.position = 'fixed';
		pointerR.style.width = '144px';
		pointerR.style.height = '176px';
		pointerR.style.top = '40%';
		pointerR.style.right = '10%';
		
		var pointerL = document.createElement('img');
		pointerL.id = 'pointerLeft';
		pointerL.src = getSiteUrl()+'js/images/pointer-left.png';
		pointerL.style.position = 'fixed';
		pointerL.style.width = '144px';
		pointerL.style.height = '176px';
		pointerL.style.top = '40%';
		pointerL.style.left = '10%';
		if(image.src==imagesArray[0]){
			pointerL.style.display = 'none';
		}

		document.body.appendChild(div);
		document.body.appendChild(imageDiv);
		document.body.appendChild(pointerR);
		document.body.appendChild(pointerL);
		document.body.appendChild(closeDiv);
		document.getElementById('galleryImageDiv').appendChild(image);

		
		var pointerRight = document.getElementById('pointerRight');
		var pointerLeft = document.getElementById('pointerLeft');

		pointerRight.onmouseover = function() {
		   pointerRight.src = getSiteUrl()+'js/images/pointer-right-pressed.png';
		}
		pointerRight.onmouseout = function() {
		   pointerRight.src = getSiteUrl()+'js/images/pointer-right.png';
		}
		pointerRight.onclick = function(){
			for (var num = 0; num<imagesArray.length; num++){
					if(image.src == imagesArray[num]){
					  if(imagesArray[num+1]!=null){
							$(image).fadeOut('2000',function(){
							$(image).attr('src',imagesArray[num+1]);
							$(image).fadeIn('2000');
							});			
						}
						if(imagesArray[num+1]==(imagesArray[imagesArray.length-1])){
							pointerR.style.display = 'none';
						}
						if((num+1)>0){
							pointerL.style.display = 'block';
						}
						break;
					}
			}
		}
		pointerLeft.onmouseover = function() {
		   pointerLeft.src = getSiteUrl()+'js/images/pointer-left-pressed.png';
		}
		pointerLeft.onmouseout = function() {
		   pointerLeft.src = getSiteUrl()+'js/images/pointer-left.png';
		}
		pointerLeft.onclick = function(){
			for (var num = 0; num<imagesArray.length; num++){
					if(image.src == imagesArray[num]){
					  if(imagesArray[num-1]!=null){
							$(image).fadeOut('2000',function(){
							$(image).attr('src',imagesArray[num-1]);
							$(image).fadeIn('2000');
							});			
						}
						if(imagesArray[num-1]==imagesArray[0]){
							pointerL.style.display = 'none';
						}
						if((num)==imagesArray.length-1){
							pointerR.style.display = 'block';
						}
						break;
					}
			}
		}
		var closeDivId = document.getElementById('closeDivId');
		closeDivId.onmouseover = function() {
		   this.src = getSiteUrl()+'js/images/close-X-over.png';
		}
		closeDivId.onmouseout = function() {
		   this.src = getSiteUrl()+'js/images/close-X.png';
		}
		closeDivId.onclick = function() {
			document.getElementById('galleryImageDiv').removeChild(image);
			document.body.removeChild(pointerR);
			document.body.removeChild(pointerL);
			document.body.removeChild(closeDiv);
			document.body.removeChild(imageDiv);
			document.body.removeChild(div);
		}
	}
	function getSiteUrl(){
		//if you working on your computer change return parsedUrl to return networkURL value
		var computerPath = document.location.href;
		var networkURL = document.location.origin;
		var parsedURL = "";
		for(var i = 0; i < computerPath.length-12; i++){
			parsedURL = parsedURL+computerPath[i];
		}
		return networkURL;
	}