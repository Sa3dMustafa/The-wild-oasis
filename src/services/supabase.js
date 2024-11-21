import { createClient } from '@supabase/supabase-js'
export const supabaseUrl = 'https://lexikvduwfhjtwgnpizr.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxleGlrdmR1d2ZoanR3Z25waXpyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY1MjQxODUsImV4cCI6MjA0MjEwMDE4NX0.TNuAn6-EjLcOcgEqz4tbM1Y2cDuZpp2ye-cMVMkKSZI"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;