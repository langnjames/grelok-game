 /**
  * Container that holds all scenes
  * All functions and member variables are static in this class
  */
 class SceneManager{
    /**
     * List of all scenes within the game. Index begins at 0
     */
    static scenes = []
    /** Index of the current scene, default 0 */
    static currentSceneIndex = 0
    /** Tracks the changing of scenes during the previous frame */
    static changedSceneFlag = true

    /** Tracks the previous scene to help preserve necessary game objects */
    static previousSceneIndex = -1

    /**
     * Start the game with given scenes and title
     * @param {SceneArray} scenes the array of scenes
     * @param {String} title title of the game
     */
    static startScenes(scenes, title){
        SceneManager.setScenes(scenes)
        start(title)
    }

    /**
     * Begins testing a game with the scenes, name, and options given
     * @param {SceneArray} scenes array of scenes
     * @param {String} title title of the game
     * @param {Object} options options object
     */
    static testScenes(scenes, title, options){
        SceneManager.setScenes(scenes)
        test(title, options)
    }

    /**
     * Replaces the scenes in a game with a new scene/scenes
     * @param {SceneArray} scenes array of scenes for the game
     */
    static setScenes(scenes){
        SceneManager.currentSceneIndex = 0
        SceneManager.changedScene = true
        SceneManager.scenes = []
        SceneManager.addScenes(scenes)
    }

    /**
     * Add the array of scenes to the current array of scenes
     * @param {SceneArray} scenes array of scenes for the game
     */
    static addScenes(scenes){
        for(let scene of scenes){
            SceneManager.addScene(scene)
        }
    }

    /**
     * Add a single scene to the array of scenes for the game
     * @param {SceneArray} scene scene to be added to the game
     */
    static addScene(scene){
        SceneManager.scenes.push(scene)
    }

    /**
     * Gets the current scene the game is running on
     * @returns the current scene
     */
    static getActiveScene() {
        return SceneManager.scenes[SceneManager.currentSceneIndex]

    }

    /**
     * Gets the previous scene the game was last running on
     * Used to help with persistence bewteen scenes
     * @returns the last scene the game was on
     */
    static getPreviousScene() {
        if(SceneManager.previousSceneIndex == -1)
            return
        return SceneManager.scenes[SceneManager.previousSceneIndex]
        
    }

    /**
     * Changes the scene to the next scene given by the index
     * @param {Integer} index number given to be used in the index of sceen aray
     */
    static changeScene(index) {
        SceneManager.previousSceneIndex = SceneManager.currentSceneIndex
        SceneManager.currentSceneIndex = index
        SceneManager.changedSceneFlag = true
    }
 }

 /** This adds SceneManager to the global namespace to be called in different areas */
 window.SceneManager = SceneManager