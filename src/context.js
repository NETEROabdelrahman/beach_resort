import React, { useContext, useEffect, useReducer, useState } from "react"
import items from './data'
import reducer from "./components/Reducer"
const AppContext = React.createContext()




const formatData = (items) => {
    const tempItems = items.map(item => {
       const id = item.sys.id
        const images = item.fields.images.map(item => item.fields.file.url)
        let room = { ...item.fields, images, id };
        return room
    })
    return tempItems
}
const initialState = {
    rooms: formatData(items),
    sortedRooms: [],
    featuredRooms: formatData(items).filter(room => room.featured === true),
    loading: true,
    type: 'all',
    capacity: 1,
    price: 0,
    size: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets:false
}
const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState)
    const { rooms, sortedRooms, featuredRooms, loading, type, capacity, price, size, minPrice, maxPrice, minSize, maxSize, breakfast, pets } = state;

    // const [rooms,setRooms] = useState(formatData(items))
    // const [sortedRooms,setSortedRooms] = useState([])
    // const [featuredRooms,setFeaturedRooms] = useState(formatData(items).filter(room => room.featured === true))
    // const [loading,setLoading] = useState(true)
    // const [type,setType] = useState('all')
    // const [capacity,setCapacity] = useState(1)
    // const [price,setPrice] = useState(0)
    // const [size,setSize] = useState(0)
    // const [minPrice,setMinPrice] = useState(0)
    // const [maxPrice,setMaxPrice] = useState(0)
    // const [minSize,setMinSize] = useState(0)
    // const [maxSize,setMaxSize] = useState(0)
    // const [breakfast,setBreakfast] = useState(false)
    // const [pets,setPets] = useState(false)

    
    
    


    useEffect(() => { 
    dispatch({type:'changing'})
    // setSortedRooms(rooms)
    // setLoading(false)
    // setPrice(Math.max(...rooms.map(room => room.price)))
    // setSize(Math.max(...rooms.map(room => room.size)))
    // setMaxPrice(Math.max(...rooms.map(room => room.price)))
    // setMaxSize(Math.max(...rooms.map(room => room.size)))
}, [])
//console.log(maxPrice,maxSize)

    

    //console.log(rooms)
    //console.log(sortedRooms)



    const filterRooms = () => {
        let tempRooms = [...rooms]
        if (type !== 'all') {
            tempRooms = tempRooms.filter(item => item.type === type)
            dispatch({type:'type',payLoad:tempRooms})
            //setSortedRooms(tempRooms)
        }
        if (capacity !== 1) {
            tempRooms = tempRooms.filter(item => item.capacity >= capacity)
            dispatch({type:'capacity',payLoad:tempRooms})
            //setSortedRooms(tempRooms)
        }
        if (price !== maxPrice) {
            tempRooms = tempRooms.filter(item => item.price <= price)
            dispatch({type:'price',payLoad:tempRooms})
            //setSortedRooms(tempRooms)
        }
        if (size !== maxSize) {
            tempRooms = tempRooms.filter(item => item.size <= size)
            dispatch({type:'size',payLoad:tempRooms})
            //setSortedRooms(tempRooms)
        }
        if (pets) {
            tempRooms = tempRooms.filter(item => item.pets === pets)
            dispatch({type:'pets',payLoad:tempRooms})
            // setSortedRooms(tempRooms)
        }
        if (breakfast) {
            tempRooms = tempRooms.filter(item => item.breakfast === breakfast)
            dispatch({type:'breakfast',payLoad:tempRooms})
            //setSortedRooms(tempRooms)
        }
        
        else if (capacity === 1 && type === 'all'&&breakfast===false&&pets===false&&price===maxPrice&&size===maxSize) {
            dispatch({type:'none'})
            //setSortedRooms(rooms)
        }
    }
    
    
    useEffect(() => {
    filterRooms()
},[type,capacity,price,size,breakfast,pets])

const handleChange = (e) => {
        e.preventDefault()
        
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value
        const type = e.target.type
        const name = e.target.name
        if (name === 'type') {
            dispatch({type:'type2',payLoad:value})
            //setType(value)
        }
        if (name === 'capacity') {
            dispatch({type:'capacity2',payLoad:Number(value)})
            //setCapacity(Number(value))
        }
        if (name === 'price') {
            dispatch({type:'price2',payLoad:Number(value)})
            // setPrice(Number(value))
        }
        if (name === 'size') {
            dispatch({type:'size2',payLoad:Number(value)})
            //setSize(Number(value))
        }
        if (name === 'breakfast') {
            dispatch({type:'breakfast2',payLoad:value})
            //setBreakfast(value)
        }
        if (name === 'pets') {
            dispatch({type:'pets2',payLoad:value})
            //setPets(value)
        }
        
        
        
       
        console.log(type,name,value,capacity)
    }



    return <AppContext.Provider value={{
        rooms,
        sortedRooms,
        featuredRooms,
        loading,
        type,
        capacity,
        price,
        size,
        minPrice,
        maxPrice,
        maxSize,
        minSize,
        breakfast,
        pets,
        handleChange,
        filterRooms,
        
    }}>{children }</AppContext.Provider>
}

const useGlobalContext = () => {
    return  useContext(AppContext)
}

export {useGlobalContext,AppProvider,AppContext}