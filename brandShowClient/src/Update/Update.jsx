import { useLoaderData } from "react-router-dom";
import swal from "sweetalert";

function Update() {
  const data = useLoaderData();
  console.log(data._id);
  const handleAddproducts = async (e) => {
    e.preventDefault();
    const form = e.target;
    let name = form.name.value;
    let img = form.image.value;
    let brand = form.brand.value;
    let category = form.category.value;
    let price = form.price.value;
    let desc = form.description.value;
    let rating = form.rating.value;
    let datas = { name, img, brand, category, price, desc, rating };

    await fetch(`https://brand-show-server.vercel.app/updated/${data._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(datas),
    })
      .then((e) => e.json())
      .then((e) => {
        if (e.modifiedCount>0) {
          swal("Good job!", "Succesfully Product Added!", "success");
          form.name.value = "";
          form.image.value = "";
          form.brand.value = "";
          form.category.value = "";
          form.price.value = "";
          form.description.value = "";
          form.rating.value = "";
        }
      })
      .catch((e) => console.log(e));
  };
  return (
    <>
      <form
        onSubmit={handleAddproducts}
        className=" w-80 md:w-3/5 mx-auto card-body">
        {/* name */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="Name"
            name="name"
            id="name"
            className="input input-bordered"
            required
            defaultValue={data.name}
          />
        </div>
        {/* image */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Image URL</span>
          </label>
          <input
            type="text"
            placeholder="image url"
            name="image"
            id="image"
            className="input input-bordered"
            defaultValue={data.img}
            required
          />
        </div>
        {/* barnd */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Barnd</span>
          </label>
          <input
            type="text"
            placeholder="Brand"
            defaultValue={data.brand}
            name="brand"
            id="brand"
            className="input input-bordered"
            required
          />
        </div>
        {/* type of products */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Category</span>
          </label>
          <input
            type="text"
            placeholder="category"
            id="category"
            defaultValue={data.category}
            name="category"
            className="input input-bordered"
            required
          />
        </div>
        {/* price */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input
            type="text"
            placeholder="price"
            name="price"
            id="price"
            className="input input-bordered"
            defaultValue={data.price}
            required
          />
        </div>
        {/* description */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <input
            type="text"
            placeholder="Description"
            name="description"
            defaultValue={data.desc}
            id="description"
            className="input input-bordered"
            required
          />
        </div>
        {/* Rating */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Rating</span>
          </label>
          <input
            type="text"
            placeholder="Rating"
            defaultValue={data.rating}
            name="rating"
            id="rating"
            className="input input-bordered"
            required
          />
        </div>

        <div className="form-control md:w-2/4 mx-auto mt-6">
          <button type="submit" className="btn btn-primary">
            Update Product
          </button>
        </div>
      </form>
    </>
  );
}

export default Update;
