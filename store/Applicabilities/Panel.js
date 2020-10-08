export const state = () => ({
    /**
     * @property Vuex массив для фильтров select состоящий из массивов
     */
    Panel: [
        {
            id: 1,
            SelectedMarka: [],
            SelectedModel: [],
            SelectedGenerations: [],
            DataModel: [],
            DataGenerations:[],
        }
    ],
    /**
     * @property Последний Id массива в Panel
     */
    Ids: 1,
})
export const mutations = {
    /**
     *  
     * @function  SetPanelNew - Добавляет новый  пустой массив в Panel
     */
    SetPanelNew(store) {
        store.Ids++;
        store.Panel.push({
            id: store.Ids,
            SelectedMarka: [],
            SelectedModel: [],
            SelectedGenerations: [],
            DataModel: [],
            DataGenerations:[],
        });
    },
    /**
     *  
     * @function  SetPanelNew - Удаляет массив по index в Panel
     */
    DeletePanel(store, data) {
        store.Panel.splice(data, 1);
    },
    /**
     * @function SetPanel - Добавляет Selected или Data в выбранном по id в Panel
     * @param {Number} data.id - id Panel с которым работать  
     * @param {String} data.name - Названия ключа который нужно изменить в Panel
     * @param {Array} data.value -  Значение на которое нужно поменять состояния Panel
     */
    SetPanel(store, data) {
        let index = store.Panel.findIndex(panel => panel.id == data.id);
        store.Panel[index][data.name] = data.value;
    },
    /**
     * @function SetPanel - Очищает Selected и Data в выбранном по id в Panel 
     * @param {Number} data.id - id Panel с которым работать 
     * @param {String} data.NameSelected - Названия ключа Selected который нужно сбросить в Panel
     * @param {String} data.NameSelected - Названия ключа Data который нужно сбросить в Panel
     */
    ResetClildren(store, data){
        let index = store.Panel.findIndex(panel => panel.id == data.id);
        store.Panel[index][data.NameSelected] = [];
        store.Panel[index][data.NameData] = [];
    },
    /**
     * 
     * @function ResetAll - Очищает все Panels
     */
    ResetAll(store){
        store.Panel = [
            {
                id: 1,
                SelectedMarka: [],
                SelectedModel: [],
                SelectedGenerations: [],
                DataModel: [],
                DataGenerations:[],
            }
        ]
    },
    SetAllIdUrl(store){
        return store.Panel;
    }
}

export const actions = {
    /**
     *  
     * @function  DeletePanel - Ищет Index по Id и отправляет в мутацию удаления Panel
     */
    DeletePanel({ store, commit, getters }, id) {
        let index = getters.PanelfindIndex(id);
        commit("DeletePanel", index);
    },
}
export const getters = {
    /**
     * #Вывод всех Panel
     * @returns {Array}  Массив всех Panel
     */
    GetPanel: s => s.Panel,
    /**
     * #Вывод количество Panel
     * @returns {Number}  количество Panel
     */
    PanelLength: s => s.Panel.length,
    /**
     * #Вывод одной Panel по id
     * @returns {Object}  одна Panel
     */
    PanelId: s => id => s.Panel.filter(data => data.id == id)[0],
    /**
     * #Вывод index панели по id
     * @returns {Object}  index Panel
     */
    PanelfindIndex: s => id => s.Panel.findIndex(panel => panel.id == id)
}   