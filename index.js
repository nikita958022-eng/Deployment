const express=require('express')
const app=express()

app.use(express.json());

let users=[
{id:1, name:'prabir'},
{id:2, name:'Vivek'}

]

app.get('/users',(req,res)=>{
    res.json(users);

})

app.get('/users:id',(req,res)=>{
    const id=Number(req.Params.id);
    const user=user.find((u)=>u.id===id);

    if(!user){
        return res.status(404).json({message: 'user not Found'});
    }

    res.status(200).json(user)
})
app.post("/users", (req, res) => {
  const { name } = req.body;

  if (!name || !name.trim()) {
    return res.status(400).json({ message: "Name is required" });
  }

  const newUser = {
    id: users.length
      ? Math.max(...users.map((u) => u.id)) + 1
      : 1,
    name: name.trim()
  };

  users.push(newUser);

  res.status(201).json({
    message: "User created successfully",
    user: newUser
  });
});

app.put("/users/:id", (req, res) => {
  const id = Number(req.params.id);

  const user = users.find((u) => u.id === id);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  const { name } = req.body;

  if (!name || !name.trim()) {
    return res.status(400).json({ message: "Name is required" });
  }

  user.name = name.trim();

  res.status(200).json({
    message: "User updated successfully",
    user
  });
})

app.delete('/users:id',(req,rea)=>{
    const id=Number(res.params.id);

    const userExists=users.some((u)=>u.id===id);

    if(!userExsits){
        return res.status(404).json({message: 'User not Found'})
    }
     users = users.filter((u) => u.id !== id);

  res.status(200).json({
    message: "User deleted successfully"
  });
});









app.listen(3000,()=>{
    console.log('Server is running');
    
})