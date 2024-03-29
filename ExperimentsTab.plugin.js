/**
 * @name ExperimentsTab
 * @authorId 421399233606713376
 * @invite dcn7J2X
*/

class ExperimentsTab {
    getName() {return "ExperimentsTab";}
    getDescription() {return "Add automatically the Experiments tab to your Discord";}
    getVersion() {return "0.0.1";}
    getAuthor() {return "Aika Dev (Brineexee)#8590";}

    start() {
        BdApi.showConfirmationModal("Experiments Tab plugin enabled", 
    [
        BdApi.React.createElement("a", {href: "https://gist.github.com/MPThLee/3ccb554b9d882abc6313330e38e5dfaa", target: "_blank"}, "Credits to the github page linked to this message for the main code")
    ],
    {
        danger: true,
        confirmText: "Okay"
    }
);
        (() => {
            // Extracted from Samogot's LibDiscordInternals for BetterDiscord.
            const req = typeof(webpackJsonp) === "function" ? webpackJsonp([], {
                '__extra_id__': (module, exports, req) => exports.default = req
            }, ['__extra_id__']).default : webpackJsonp.push([[], {
                '__extra_id__': (module, exports, req) => module.exports = req
            }, [['__extra_id__']]]);
            delete req.m['__extra_id__'];
            delete req.c['__extra_id__'];
            const find = (filter, options = {}) => {
                const {cacheOnly = true} = options;
                for (let i in req.c) {
                    if (req.c.hasOwnProperty(i)) {
                        let m = req.c[i].exports;
                        if (m && m.__esModule && m.default && filter(m.default))
                            return m.default;
                        if (m && filter(m))
                            return m;
                    }
                }
                if (cacheOnly) {
                    console.warn('Cannot find loaded module in cache');
                    return null;
                }
                console.warn('Cannot find loaded module in cache. Loading all modules may have unexpected side effects');
                for (let i = 0; i < req.m.length; ++i) {
                    try {
                        let m = req(i);
                        if (m && m.__esModule && m.default && filter(m.default))
                            return m.default;
                        if (m && filter(m))
                            return m;
                    }
                    catch (e) {
                    }
                }
                console.warn('Cannot find module');
                return null;
            };
            const findByUniqueProperties = (propNames, options) => find(module => propNames.every(prop => module[prop] !== undefined), options);
            // https://github.com/Inve1951/BetterDiscordStuff/blob/master/plugins/discordexperiments.plugin.js
            Object.defineProperty(findByUniqueProperties(["isDeveloper"]),"isDeveloper",{get:_=>1,set:_=>_,configurable:true});
        })();
    }
}