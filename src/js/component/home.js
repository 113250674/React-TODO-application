import React, { useState } from "react";

//create your first component
export function Home() {
	const [tarea, setTarea] = useState("");
	const [listaTareas, setlistaTareas] = useState([]);

	const agregarTarea = () => {
		setlistaTareas([...listaTareas, tarea]);
		setTarea("");
	};

	return (
		<div className="col-6 mx-auto text-center bg-white shadow mt-5 rounded pb-5">
			<div className="row">
				<h1 className="text-center col">Tareas</h1>
			</div>
			<div className="row">
				<div className="col-9 input-groupp">
					<input
						className="form-control"
						type="text"
						placeholder="Agrega una Tarea"
						onChange={e => setTarea(e.target.value)}></input>
				</div>
				<div className="col-3">
					<button onClick={agregarTarea} className="btn btn-dark">
						Anadir Tarea
					</button>
				</div>
				<div className="col-12 py-5">
					<ul className="list-group">
						{listaTareas.map((item, index) => {
							return (
								<li key={index} className="list-group-item">
									{item}
								</li>
							);
						})}
					</ul>
				</div>
				<div className="col-12 text-left">
					{listaTareas.length} tareas por hacer
				</div>
			</div>
		</div>
	);
}
