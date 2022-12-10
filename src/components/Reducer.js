const reducer = (state,action) => {
    
        switch (action.type) {
            case 'changing': {
                return {
                    ...state,
                    sortedRooms: state.rooms,
                    loading: false,
                    price: Math.max(...state.rooms.map(room => room.price)),
                    size: Math.max(...state.rooms.map(room => room.size)),
                    maxPrice: Math.max(...state.rooms.map(room => room.price)),
                    maxSize: Math.max(...state.rooms.map(room => room.size)),
                    
                }
            }
            case 'type': {
                return {
                    ...state,
                    sortedRooms:action.payLoad
                    
                }
            }
            case 'capacity': {
                return {
                    ...state,
                    sortedRooms:action.payLoad
                    
                }
            }
            case 'price': {
                return {
                    ...state,
                    sortedRooms:action.payLoad
                    
                }
            }
            case 'size': {
                return {
                    ...state,
                    sortedRooms:action.payLoad
                    
                }
            }
            case 'pets': {
                return {
                    ...state,
                    sortedRooms:action.payLoad
                    
                }
            }
            case 'breakfast': {
                return {
                    ...state,
                    sortedRooms:action.payLoad
                    
                }
            }
            case 'none': {
                return {
                    ...state,
                    sortedRooms:state.rooms
                    
                }
            }
            case 'type2': {
                return {
                    ...state,
                    type:action.payLoad
                    
                }
            }
            case 'capacity2': {
                return {
                    ...state,
                    capacity:action.payLoad
                    
                }
            }
            case 'price2': {
                return {
                    ...state,
                    price:action.payLoad
                    
                }
            }
            case 'size2': {
                return {
                    ...state,
                    size:action.payLoad
                    
                }
            }
            case 'breakfast2': {
                return {
                    ...state,
                    breakfast:action.payLoad
                    
                }
            }
            case 'pets2': {
                return {
                    ...state,
                    pets:action.payLoad
                    
                }
            }
                
                
        
            default:
                break;
        }
     
}
 
export default reducer;