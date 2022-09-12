* Connect to the ec2 instance from the power shell

```bash
ssh -i .\<file.pem> ec2-user@<ipv4_public_address>
```

* aws version 
```bash
aws --version
```


Note : never enter access keys in your EC2 instance `configure`


```bash
aws iam list-users
```