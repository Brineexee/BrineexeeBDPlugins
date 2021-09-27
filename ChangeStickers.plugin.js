/**
 * @name ChangeStickers
 * @authorId 421399233606713376
 * @invite esZ9VRWeur
*/


class ChangeStickers {

    // Constructor
    constructor() {
        this.initialized = false;
    }
    
   
    getName() {return "ChangeStickers";}
    getDescription() {return "Remove the Stickers in the message tab etc.";}
    getVersion() {return "0.0.1";}
    getAuthor() {return "Aika Dev (Brineexee)#8590 ";}


    
    start() {
        const injectCss = (id, css) => {
            const style = document.createElement('style');
            style.id = id;
            style.innerText = css;
            document.head.appendChild(style);
            return style;
        }
        injectCss('RemoveStickers', `
        .cozy-3raOZG .assetWrapper-3GNt0z {
            max-width: 48px;
            max-height: 48px
        }
        #sticker-picker-tab {display: none}

        .container-JHR0NT{
           display: none;
        }
        
        .contentWrapper-SvZHNd{
            display: none;
        }
        
        .stickerButton-3OEgwj{
            display: none;
        }`);        
    
    }

    
    stop(){
        const injectCss = (id, css) => {
            const style = document.createElement('style');
            style.id = id;
            style.innerText = css;
            document.head.appendChild(style);
            return style;
        }
        injectCss('EnableStickers', `
        .cozy-3raOZG .assetWrapper-3GNt0z {
            max-width: 320px;
            max-height: 320px
        }
        #sticker-picker-tab { display: inline;}

        .container-JHR0NT{
            display: inline;
        }

        .stickerButton-3OEgwj{
            display: inline;
        }`);   
    }
    
    getSettingsPanel(){
        var btn = document.createElement("BUTTON");   // Create a <button> element
        btn.innerHTML = "Test";                   // Insert text
        document.body.appendChild(btn);               // Append <button> to <body>
        btn.onclick = function() {
            alert("Test!");
        }
        return btn;
    }
}
