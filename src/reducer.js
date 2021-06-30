export  const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // Remove after finished developing......
    token: "BQDQNEMnKbTLZymnPhTRskcKuSpSS8VCBWhOM86MTOJL7fS4VhsibxxGYjpekSum5Besr2NSZJ6wcBmM1uxvDsp3c0oZZJjWKtnfmhyiLrRo_WZIgN4JMljVjHC2YHPuTFaf60bG_Vw0sXQ5Fx5fyqV4xOtiA8A48RbPiKGA7-ed_wVK6Rkg",
}

const reducer = (state, action) => {
    console.log(action);

    switch(action.type) {
        case "SET_USER":
            return {
                ...state, 
                user: action.user
            };

        case "SET_TOKEN":
            return{
                ...state,
                token: action.token,
            };

        default:
            return state;
    }
};

export default reducer;