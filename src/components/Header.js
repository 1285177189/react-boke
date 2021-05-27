import './header.css';
import logo from './logo.png';
function Header(props) {
	const numbers = [
		{id:1,title:"首　　页"},
		{id:2,title:"关于博主"},
		{id:3,title:"技术交流"},
		{id:4,title:"项目案例"},
		{id:5,title:"网站推荐"}
	];
	const listItems = numbers.map((item) =>
	    <li key={item.id}>{item.title}</li>
	);
	return (
		<div className="header">
			<div className="warp">
				<img src={logo} className="logo" alt="logo" />
				<p className="text">斌味十足</p>
				<ul>{listItems}</ul>
			</div>
		</div>
	);
}
export default Header;