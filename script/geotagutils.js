// JScript File
function createInfoWindowHtml(caption,pictureArray,index,filesystem)
    {
    // caption: DOM Node contains the A element
    // PictureArray: Set of XML nodes defining pictures
    // Index: picture to access in the set
    // returns a DIV node containing a thumb of the pics and the a element for it
    //
    var thumbDiv = document.createElement("div");
    thumbDiv.align="center";
    // The infoWindow seems to have a minimum width of 200px
    // May be related to following defect?
    // http://groups.google.com/group/Google-Maps-API/browse_thread/thread/229a699cf273522d/ed1c662d6524d4f1#ed1c662d6524d4f1    
    //thumbDiv.style.width="160px"; // This works only if >200px, otherwise does nothing
    //Work around, is to center the img and put a black background in teh infoWindow
    var infoNode = caption.cloneNode(true);
    // Add thumb picture to node
    var thumbPic = document.createElement("img");
    //thumbPic.src=pictureArray[index].getAttribute("filename");
    //Flickr convention: filename + _t returns a thumb 100x75 pixels
    //thumbPic.src=thumbPic.src.concat("_t.jpg");
    thumbPic.src=buildThumbPicURL(filesystem,pictureArray[index].getAttribute("filename"));
    thumbPic.width = 100;
    thumbPic.height = 75;
    //create a clear both br
    var thumbBr = document.createElement("br");
    thumbBr.style.clear = "both";
    thumbDiv.appendChild(thumbPic);    
    thumbDiv.appendChild(thumbBr);
    thumbDiv.appendChild(infoNode);
    return thumbDiv;
    }
function createIcon()
    {
    // Based on Google map api example
    var icon = new GIcon();
    icon.image = "/img/acquadot.png";
    icon.iconSize = new GSize(15, 15);
    icon.iconAnchor = new GPoint(6, 20);
    icon.infoWindowAnchor = new GPoint(5, 1);
    return icon;
    }

function buildThumbPicURL(filesystem,textNode)
    {
    switch (filesystem)
        {
        case "flickr":
        case "internal":
        //Might as well use the same convention as flickr
            return textNode.concat("_t.jpg");
        }
    }
function buildMediumPicURL(filesystem,textNode)
    {
    switch (filesystem)
        {
        case "flickr":
            return textNode.concat(".jpg");
        case "internal":
            return textNode;
        }
    }
function buildLargePicURL(filesystem,textNode)
    {
    switch (filesystem)
        {
        case "flickr":
            return textNode.concat("_o.jpg");
        case "internal":
            return textNode;
        }
    }


