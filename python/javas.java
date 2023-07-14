class random
{
    int globalVariable;

    public void f1()
    {
        int localVariable = 10;
        globalVariable = 20;
        int globalVariable = 30;
    }

    public void f2()
    {
        int localVariable = 11;
    }

    public void f3()
    {
        int localVariable = 12;
    }

    
}