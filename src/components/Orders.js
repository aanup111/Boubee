import React, { useEffect, useState } from 'react';
import { db } from '../Firebase';
import '../css/Orders.css'
import { useStateValue } from '../StateProvider';
import Order from './Order'

function Orders() {
const [orders, setOrders] = useState([]);
const [ {cart, user} , dispatch] = useStateValue(); 



useEffect(() => {
    if(user) {
    db.collection('users')
    .doc(user?.uid)
    .collection('orders')
    .orderBy('created', 'desc')
    .onSnapshot(snapshot => (
        setOrders(snapshot.docs.map(doc => ({
            id: doc.id,
            data: doc.data()
        })))
    )) 
} else {
    setOrders([]);
}
}, [user])

    return (
        <div className='orders'>
            <h1>Your orders</h1>
            <h2>{!user? 'Please login to view order history' : ''}</h2>
            <div className='orders_order'>
                {orders?.map(order => (
                    <Order order={order} />
                ))}

            </div>
        </div>
    )
}

export default Orders
