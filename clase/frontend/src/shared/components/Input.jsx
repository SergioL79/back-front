import { userSchema } from "../../features/users";

export default function Input({
    label, 
    type = "text", 
    error,
    ...props
}){
    return (
      <div className="w-[320px]">
        {/*Label */}
        {label && (
          <label
            className={`
              block
              text-[8px]
              text-gray-500
              font-mono     
              font-light
              pb-1
              ${error ? 'text-red-600' : 'text-brand-hover'}
            `}



          >
            {label}
          </label>
        )}
        {/* EL contenedor del input */}

        <div
            className="
            relative
            h-12
            flex
            items-center
            "
        >
          {/* Area interactiva visible (48px)*/}

          <div
                className="
                absolute
                inset-0
                "
                onMouseDown = {(e) => {
                    e.preventDefault();
                    e.currentTarget.nextSibling.focus();
                    }}  
          />

          <input
            type={type}
            className={`
                  w-full
                  h-12
                  relative
                  text-black
                  rounded-xl
                  bg-[#DEFBDD]
                  border
                  border-[#F1FDF0]
                  px-4
                  text-base
                  focus:ring-2
                  focus:ring-[#062d08]
                  focus:border-[#062d08]
                  focus:outline-none                    
                  ${error ? 'border-red-600' : 'border border-border-strong'}   
              `}
            {...props}
          />
        </div>
              {error && <p className="text-red-700 text-sm mt-1">{error}</p>}
      </div>
    );
}