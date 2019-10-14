const controller={};
/*controller.lista=(req,res)=>{
	const { id } = req.params;
	req.getConnection((err,conn)=>{
		conn.query('SELECT cita.codcita, cliente.nombre, date_format(horario.fecha,"%d %M %Y")as fecha, horario.hora_inicio, horario.hora_fin, cita.status, cita.doctor_coddoctor  FROM cita\
					INNER JOIN cliente ON cita.cliente_codcliente =cliente.codcliente\
					INNER JOIN horario ON cita.horario_codhorario = horario.codhorario \
					WHERE doctor_coddoctor=?;',[id], (err,citas)=> {
			if(err){
				res.json(err);
			}

			console.log(citas);
			res.render('citas',{
				data: citas
			})
		});
	});
};*/
