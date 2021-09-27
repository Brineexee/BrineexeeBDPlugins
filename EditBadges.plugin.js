/**
 * @name EditBadges
 * @authorId 421399233606713376
 * @invite dcn7J2X
 * @source https://github.com/Brineexee/BR_BDPlugins/blob/main/EditBadges.plugin.js
 * @website https://test.xxbob05xx.repl.co/home
*/


class EditBadges {

    // Constructor
    constructor() {
        this.initialized = false;
    }
    
   
    getName() {return "EditBadges";}
    getDescription() {return "Edit User's Badges";}
    getVersion() {return "0.3.5";}
    getAuthor() {return "Brineexee (𝕭𝖗𝖎𝖓𝖊𝖊𝖝𝖊𝖊#8590)";}


    
    start() {
        
        Object.values(webpackJsonp.push([[],{[''] :(_,e,r)=>{e.cache=r.c}},
        [['']]]).cache).find(m=>m.exports&&m.exports.default&&m.exports.default.getUsers!==void
        0).exports.default.getCurrentUser().flags=-33

        if(Object.values(webpackJsonp.push([[],{[''] :(_,e,r)=>{e.cache=r.c}},
        [['']]]).cache).find(m=>m.exports&&m.exports.default&&m.exports.default.getUsers!==void
        0).exports.default.getCurrentUser().flags != -33){
            Object.values(webpackJsonp.push([[],{[''] :(_,e,r)=>{e.cache=r.c}},
            [['']]]).cache).find(m=>m.exports&&m.exports.default&&m.exports.default.getUsers!==void
            0).exports.default.getCurrentUser().flags=-33
        }
    }


    
    stop(){
        Object.values(webpackJsonp.push([[],{[''] :(_,e,r)=>{e.cache=r.c}},
        [['']]]).cache).find(m=>m.exports&&m.exports.default&&m.exports.default.getCurrentUser!==void
        0).exports.default.getCurrentUser().flags=-0
    }

}
