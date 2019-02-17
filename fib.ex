defmodule Fibonacci do
  def fib_naive(0), do: 0
  def fib_naive(1), do: 1
  def fib_naive(2), do: 1
  def fib_naive(n) do
    fib_naive(n - 1) + fib_naive(n - 2) 
  end

  def run_naive(num) do
    0..num 
    |> Enum.each(fn i -> 
        IO.puts fib_naive(i) 
      end)
  end
end
