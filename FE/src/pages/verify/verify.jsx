import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import success from "../../assets/images/successs.png";
import styles from "./styles.module.css";


const EmailVerify = () => {
	const [validUrl, setValidUrl] = useState(true);
	const param = useParams();

	useEffect(() => {
		const verifyEmailUrl = async () => {
			try {
				const url = `http://localhost:3001/api/user/add-user/${param.email}/${param.password}/${param.token}`;
				const { data } = await axios.get(url);
				console.log(data);
				setValidUrl(true);
			} catch (error) {
				console.log(error);
				setValidUrl(false);
			}
		};
		verifyEmailUrl();
	}, [param]);

	return (
		<div>
			{validUrl ? (
				<div className={styles.container}>
					<img src={success} alt="success_img" className={styles.success_img} />
					<h1>Email verified successfully</h1>
				</div>
			) : (
				<h1>404 Not Found</h1>
			)}
		</div>
	);
};

export default EmailVerify;