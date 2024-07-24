import { Link } from 'react-router-dom';
import { Button } from '../components/Button';

const SignUp = () => {
	return (
		<div className="bg-slate-400">
			<div className="w-[380px] h-[671px] rounded-xl border">
				<div>
					<h1>회원가입</h1>
					<span>사용자 정보를 입력해주세요</span>
					<Link to="/login">
						<span>로그인으로 돌아가기</span>
					</Link>
				</div>
				<form>
					<label>
						<p>아이디</p>
						<input type="text" required />
					</label>
					<label>
						<p>비밀번호</p>
						<input type="text" required />
					</label>
					<label>
						<p>이름</p>
						<input type="text" required />
					</label>
					<label>
						<p>이메일</p>
						<input type="text" required />
					</label>
					<div>
						{/* <LargeButton logo={'OO'} text={'회원가입'} color={'slate'} /> */}
						<button>회원가입</button>
						<Button>회원가입</Button>
						<Button color="white" size="md">
							회원가입
						</Button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default SignUp;
