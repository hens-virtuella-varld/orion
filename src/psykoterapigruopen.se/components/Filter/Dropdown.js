import dropdownCss from "./dropdown.module.css";

import {useState} from "react";

function Dropdown({selected, setSelected, options})  {
	const [isActive, setIsActive] = useState (false);
	
	return (
		<div className={dropdownCss.dropdown}>
			<div className={dropdownCss.dropdownBtn} onClick={e=>setIsActive(!isActive)}>
				{selected} 
			<span placeholder="Lokal">  </span> 
			</div>
			{isActive && (
				<div className={dropdownCss.dropdownContent}>  
				{options.map((option) => (
					<div onClick={(e) => {setSelected(option)
					setIsActive(false)
					}}
					className={dropdownCss.dropdownItem}> {option} </div>

				))}
				</div>
			)}
		</div>
	);
};

export default Dropdown;
