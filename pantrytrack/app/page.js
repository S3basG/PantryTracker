'use client';
import Image from "next/image";
import {useState, useEffect} from "react";
import {firestore} from "../firebase";
import {Box, Typography} from "@mui/material";
import { setDoc } from "firebase/firestore";

export default function Home() {
  const [inventory, setInventory] = useState([]);
  const [open, setOpen] = useState(false);
  const [itemName, setItemName] = useState("");

  const updatePantry = async () => {
    const snapshot = query(collection(firestore, "pantry"));
    const docs = await getDocs(snapshot);
    const pantryList = [];
    docs.forEach(doc => {
      pantryList.push({
        name: doc.id,
        ...doc.data(),
      });
    })
    setPantry(pantryList);
  }

  const removeItem = async (item) => {
    const docRef = doc(collection(firestore, 'pantry'), item)
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const {quantity} = docSnap.data();
      if (quantity > 1) {
        await deleteDoc(docRef);
      } else {
        await setDoc(docRef, {quantity: quantity - 1});
      }
  }
  await updatePantry();
}

  useEffect(() => {
    updatePantry();
  }, []);

  return(
    <Box>
      <Typography variant="h1">Inventory Management</Typography>
      {
        inventory.forEach((item)=>{
          console.log(item);
          return(
          <Box>
          {item.name}
          {item.count}
          </Box>
      )
        })
      }
    </Box>
  );  
}
