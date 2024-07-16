// NewCategory.jsx
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase";
import { useNavigate } from "react-router-dom";

const NewCategory = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "categories"), {
        name: name,
      });
      navigate("/categories");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="new">
      <h1>Add New Category</h1>
      <form onSubmit={handleSubmit}>
        <div className="formInput">
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default NewCategory;