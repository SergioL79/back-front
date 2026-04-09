export default function Select({
    label,
    name,
    options = [],
    value,
    error,
    onChange,
    }
){

    return (

        <div className='w-[320px]'>

            {/* Label si el label tiene contenido es igual a truthy, si no es falsy y no muestra el label */}
            {label && (
            <label className='block text-caption pb-1 text-text-secundary '>
                {label}
            </label>
            )}
            <select
                value={value}
                onChange={onChange}
                name={name}
                className='
                    w-full
                    h-12
                    rounded-md
                    border
                    border-border
                    px-4
                '
                >
                <option value="">Seleccione un tipo de documento</option>
                {options.map((option) => {

                    return(
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                    )
                })
                };
            </select>
              {error && <p className="text-red-700 text-sm mt-1">{error}</p>}



        </div>


    );
};