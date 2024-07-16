// SingleCategory.jsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";

const SingleCategory = () => {
  const { categoryId } = useParams();
  const [category, setCategory] = useState(null);

  useEffect(() => {
    const fetchCategory = async () => {
      const docRef = doc(db, "categories", categoryId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setCategory({ id: docSnap.id, ...docSnap.data() });
      } else {
        console.log("No such document!");
      }
    };

    fetchCategory();
  }, [categoryId]);

  if (!category) return <div>Loading...</div>;

  return (
    <div className="single">
      <h1>Category Details</h1>
      <p>ID: {category.id}</p>
      <p>Name: {category.name}</p>
    </div>
  );
};

export default SingleCategory;