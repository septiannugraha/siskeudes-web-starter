const InputText = () => <input type="text" className="shadow-inner py-1 px-3 text-sm text-gray-600" />
const InputPassword = () => <input type="password" className="shadow-inner py-1 px-3 text-sm text-gray-600" />

const FormLabel : React.FC<{title: string}> = ({title}) => <p className="text-sm">{title}</p>

const Login = () => {
    return (
        <div className="flex flex-col p-8 drop-shadow-md bg-slate-50">
            <div className="flex flex-col gap-8">
                <div className="font-semibold self-center">Silakan Login</div>
                <div className="gap-2 flex flex-col">
                    <FormLabel title={'Username'} />
                    <InputText/>
                    <FormLabel title={'Password'} />
                    <InputPassword/>
                </div>
            </div>

        </div>
    )

}

export default Login