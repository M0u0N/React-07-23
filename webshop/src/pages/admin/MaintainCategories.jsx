import React, { useRef, useState, useEffect } from 'react'
import config from "../../Data/config.json"

function MaintainCategories() {
  const [categories, setCategories] = useState([]);
  const categoryref = useRef();

  useEffect(() => {
    fetch(config.categories)
    .then(res => res.json())
    .then(json => setCategories(json || []))
  }, []);

  const addCategory = () => {
    categories.push({"name": categoryref.current.value});
    setCategories(categories.slice());
    fetch(config.categories, {
      method: "PUT",
      body: JSON.stringify(categories)
    })
  }

  const deleteCategory = (index) => {
    categories.splice(index, 1);
    setCategories(categories.slice());
    fetch(config.categories, {
      method: "PUT",
      body: JSON.stringify(categories)
    })
  }

  return (
    <div>
      <label>Kategooria</label>
      <input ref={categoryref} type="text" />
      <button onClick={addCategory}>Sisesta</button>
      {categories.map((category, index ) =>
        <div>
          {category.name}
          <button onClick={() => deleteCategory(index)}>x</button>
        </div>
        )}
    </div>
  )
}

export default MaintainCategories