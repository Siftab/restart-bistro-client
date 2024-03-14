import { useForm } from 'react-hook-form';
import SectionTitle from '../../../components/SectionTitle/SectionTitle'
const AddItems = () => {
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => console.log(data)

    return (
        <div>
            <SectionTitle subHeading="whats new?" heading="Add An Item"></SectionTitle>
            <div>
                <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Recipe Name*</span>
                        </div>
                        <input type="text" placeholder="Recipe Name" className="input input-bordered w-full " {...register("name")} />
                    </label>


                    <div className='flex gap-6'>
                        {/* Category */}
                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text">Category</span>
                            </div>
                            <select className="select select-bordered w-full " {...register("category")}>
                                <option disabled selected>Select A Category</option>

                                <option value="salad">salad</option>
                                <option value="soup">soup</option>
                                <option value="pizza">pizza</option>
                                <option value="desserts">desserts</option>
                                <option value="drinks">drinks</option>
                            </select>                        </label>
                        {/*Price  */}

                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text">Price</span>
                            </div>
                            <input type="number" placeholder="Price" className="input input-bordered w-full" {...register("price")} />
                        </label>

                    </div>
                    <label className="form-control">
                        <div className="label">
                            <span className="label-text">Recepie Details</span>
                        </div>
                        <textarea className="textarea textarea-bordered h-24" placeholder="Recepie Details" {...register("recipe")}></textarea>
                        
                    </label>
                    <input type="file" className="file-input file-input-bordered w-full " {...register('image')} />

                    <input type="submit" className='btn' />
                </form>
            </div>

        </div>
    );
};

export default AddItems;